import axios from 'axios';

export const getTutorials = options => {
  try {
    return axios('http://localhost:3001/tutorials', {
      params: options,
    });
  } catch (error) {
    return error;
  }
};
