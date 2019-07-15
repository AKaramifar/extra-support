import axios from 'axios';

export const getCategories = async () => {
  try {
    return await axios('https://extra-support-backend.glitch.me/categories');
  } catch (error) {
    return error;
  }
};
