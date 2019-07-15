import axios from 'axios';

export const getTutorials = async options => {
  try {
    return await axios('https://extra-support-backend.glitch.me/tutorials', {
      params: options,
    });
  } catch (error) {
    return error;
  }
};
