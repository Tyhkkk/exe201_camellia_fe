import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../lib/apiService'; // Sử dụng axiosClient từ apiService.js

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Thêm trạng thái isLoading
  const navigate = useNavigate();

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);

      // Lưu thông tin người dùng từ token
      setUser({
        sub: decoded.sub,
        name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
        userId: decoded.UserId,
      });

      // Lưu trạng thái xác thực
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error decoding token:', error);
      logout(); // Token không hợp lệ
    }
  };

  useEffect(() => {
    if (token) {
      decodeToken(token); // Giải mã token khi khởi chạy
    }
  }, [token]);

  const login = async ({ email, passwordHash }) => {
    setIsLoading(true); // Bắt đầu loading
    try {
      const response = await apiClient.post('/api/Authen/login', { email, passwordHash });

      // Xác thực thành công
      if (response.data.success) {
        const token = response.data.token;

        // Lưu token vào localStorage
        localStorage.setItem('token', token);
        setToken(token);

        // Giải mã token và lưu thông tin người dùng
        decodeToken(token);

        // Điều hướng dựa trên vai trò
        const role = jwtDecode(token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if (role === '1') {
          navigate('/admin');
        } else if (role === '2') {
          navigate('/');
        }
      } else {
        alert('Login failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed, please check your credentials');
    } finally {
      setIsLoading(false); // Dừng loading
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
