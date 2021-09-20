/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalState = (props) => {
  //  STATE
  const [_USER_AUTH, _SET_USER_AUTH] = useState(null);

  const setUserAuth = (userAuth) => {
      console.log(_USER_AUTH)
    _SET_USER_AUTH(userAuth);
  };

  return (
    <GlobalContext.Provider
      value={{
        _USER_AUTH: _USER_AUTH,
        setUserAuth:setUserAuth
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;