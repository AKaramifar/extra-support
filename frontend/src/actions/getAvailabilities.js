import axios from 'axios';

export const getAvailabilities = async options => {
  try {
    return await axios('http://localhost:3001/tutorials/getAvailabilities', {
      params: options,
    });
  } catch (error) {
    return error;
  }
};
