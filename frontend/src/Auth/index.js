import decode from 'jwt-decode';

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
  const token = getToken();
  if (token) return decode(token);
};

export const getHeaders = () => {
  const idToken = getToken();
  if (idToken) {
    return {
      Authorization: `Bearer ${idToken}`,
    };
  }
};

const checkRoles = (decodedRoles, roles) => {
  return roles.map(role => {
    return decodedRoles.includes(role);
  });
};

export const isTokenAuthorized = (token, roles) => {
  try {
    if (!token && isTokenExpired(token)) {
      return false;
    }
    const decoded = decode(token);
    if (decoded.admin) {
      return true;
    }
    if (!roles && roles.length === 0) {
      return false;
    }
    const checkedRoles = checkRoles(decoded.roles, roles);
    if (checkedRoles.includes(true)) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};
export const isAuthorized = roles => {
  const token = getToken();
  return !!token && isTokenAuthorized(token, roles);
};
