// authGuard.js

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LocalStorage from './helper/localStorage';

export const authGuard = (Component:any) => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
   
  return (props:any) => {
    const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);
    const router = useRouter();
    
    // Get the token from local storage
    LocalStorage.getItem('token').then((token) => {
      console.log("token", token);
      // If the user is authenticated, redirect away from the login page
      if (token) {
        // You can replace '/admin/dashboard' with the desired redirect path
        // setIsLoading(false)
        router.push('/admin/dashboard');
      }
    });
    // if (isLoading) {
    //   // Render a loading indicator or placeholder content here
    //   return <div></div>;
    // }
    // If the user is not authenticated, render the original component
    if (!isAuthenticated) {
      return <Component {...props} />;
    }
    
    return null; // Return null to prevent rendering the login page
  };
};
