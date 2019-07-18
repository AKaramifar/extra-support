import axios from 'axios';

export const getTutorials = options => {
  try {
    return axios('https://extra-support-backend.glitch.me/tutorials', {
      params: options,
    });
  } catch (error) {
    return error;
  }
};
