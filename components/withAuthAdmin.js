import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import admins from '@/public/admins.json';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          window.location.href = '/login'; // Redirect to login if user is not logged in
        } else {
          // Check if user's email is in the admins list
          const isAdmin = admins.admins.some(adminEmail => adminEmail === user.email);
          if (!isAdmin) {
            window.location.href = '/restricted'; // Redirect to restricted page if not admin
          } else {
            setLoading(false); // Set loading to false if user is logged in and is admin
          }
        }
      });

      return () => unsubscribe();
    }, []);

    if (loading) {
      return <p>Loading...</p>; // Loading indicator while checking authentication state
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
