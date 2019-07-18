import decode from 'jwt-decode'

export const setToken = idToken => {
  localStorage.setItem('id_token', idToken);
  window.location.reload(true);
};

export const getToken = () => {
  const token = localStorage.getItem('id_token');
  return token;
};

export const logout = () => {
  localStorage.removeItem('id_token');
  window.location.reload(true);
};

export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded && decoded.exp && decoded.exp < Date.now() / 1000) {
      logout();
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
  }
};

export const loggedIn = () => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};
export const getProfile = () => {
  const token = getToken()
  if (token) return decode(token)
}