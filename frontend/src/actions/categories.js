import axios from 'axios';

export const getCategories = async () => {
  try {
    return await axios('http://localhost:3001/categories');
  } catch (error) {
    return error;
  }
};
