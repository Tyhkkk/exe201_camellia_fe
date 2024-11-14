import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser({
        sub: decoded.sub,
        name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
      });
    } catch (error) {
      console.error("Error decoding token:", error);
      logout();
    }
  };

  useEffect(() => {
    const handleDecodeToken = () => {
      if (token) {
        decodeToken(token);
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };
    handleDecodeToken();
  }, [token]);

  const login = async (userData) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://localhost:7065/api/Authen/login', {
        email: userData.email,
        passwordHash: userData.password, // Đảm bảo rằng API yêu cầu trường passwordHash
      });

      if (response.data.success) {
        const token = response.data.token;
        setToken(token);
        localStorage.setItem('token', token);
        decodeToken(token);
        setIsAuthenticated(true);
        toast.success('Đăng nhập thành công');
        navigate('/');
      } else {
        toast.error('Đăng nhập thất bại');
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    toast.info('Đã đăng xuất');
    navigate('/signin');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};
