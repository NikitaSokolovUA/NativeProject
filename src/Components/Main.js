import { useRoute } from '../hooks/useRoute';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { authStateChangeUser } from '../redux/auth/authOperations';
import { selectStateChange } from '../redux/auth/authSelectors';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const user = useSelector(selectStateChange);

  const routing = useRoute(user);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
