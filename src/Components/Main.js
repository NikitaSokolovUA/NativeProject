import { useRoute } from '../hooks/useRoute';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { authStateChangeUser } from '../redux/auth/authOperations';
import { selectStateChange } from '../redux/auth/authSelectors';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(authStateChangeUser());
      }
    });
  }, []);

  const user = useSelector(selectStateChange);

  const routing = useRoute(user);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
