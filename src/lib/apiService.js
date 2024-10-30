// lib/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7065/api', // Thiết lập base URL của API
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (username, password) => {
  try {
    const response = await apiClient.post('/Authen/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
