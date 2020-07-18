import React from 'react';
import { setToken, loggedIn } from './index';

export default ({ match, history }) => {
  React.useEffect(() => {
    const check = async () => {
      if (loggedIn()) history.replace('/');
      if (match.params.token) {
        await setToken(match.params.token);
      }
    };
    check();
  }, [match, history]);

  return <div></div>;
};
