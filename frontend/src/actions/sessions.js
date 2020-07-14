import axios from 'axios';

export const getSessions = options => {
  try {
    return axios('http://localhost:3001/sessions', {
      params: options,
    });
  } catch (error) {
    return error;
  }
};
