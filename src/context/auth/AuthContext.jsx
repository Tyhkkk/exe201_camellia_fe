import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      const userId = decoded.UserId; // Extract the UserId from the token
      localStorage.setItem('userId', userId); // Store UserId in localStorage

      setUser({
        sub: decoded.sub,
        name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
        userId: userId, // Add UserId to the user state
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error decoding token:', error);
      logout();
    }
  };

  useEffect(() => {
    if (token) {
      decodeToken(token);
    }
  }, [token]);

  const login = async ({ email, passwordHash }) => {
    try {
      const response = await axios.post('https://localhost:7065/api/Authen/login', { email, passwordHash });
      if (response.data.success) {
        const token = response.data.token;
        setToken(token);
        localStorage.setItem('token', token);
        decodeToken(token);

        // Navigate based on role
        const role = jwtDecode(token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if (role === '1') {
          navigate('/admin');
        } else if (role === '2') {
          navigate('/');
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed, please check your credentials');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // Remove UserId from localStorage
    navigate('/signin');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
