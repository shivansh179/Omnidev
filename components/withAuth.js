import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          window.location.href = '/login'; // Manually set the window location
        } else {
          setLoading(false);
        }
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);

    if (loading) {
      return <p>Loading...</p>; // You can replace this with a loading spinner or any other loading component
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
