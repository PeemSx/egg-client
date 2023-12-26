// useAuth.js

import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken && storedToken !== '') {

      setIsAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');

    setIsAuth(false);
    navigate("/");
    window.location.reload();
  };

  return { isAuth, handleLogout };
};

export default useAuth;
