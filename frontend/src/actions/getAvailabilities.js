import axios from 'axios';

export const getAvailabilities = async options => {
  try {
    return await axios('https://extra-support-backend.glitch.me/tutorials/getAvailabilities', {
      params: options,
    });
  } catch (error) {
    return error;
  }
};
