import axios from 'axios';

export const checkAuth = async () => {
  try {
    await axios.post('http://localhost:8000/api/token/verify/', {
      token: localStorage.getItem('access_token')
    });
    return true;
  } catch (error) {
    try {
      const response = await axios.post('http://localhost:8000/api/token/refresh/', {
        refresh: localStorage.getItem('refresh_token')
      });
      localStorage.setItem('access_token', response.data.access);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
};