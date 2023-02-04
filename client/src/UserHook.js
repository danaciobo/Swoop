import {useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const useUser = () => {
  const [userF, setUserF] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    const unsubscribe = onAuthStateChanged (getAuth(), user => {

      setUserF(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return {userF, isLoading}

}
export default useUser;