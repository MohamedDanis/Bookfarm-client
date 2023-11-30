"use client"
import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setAdmin } from '@/redux/userSlice';
import { adminDetails } from '@/api/admin/adminAuthRequest';
import LocalStorage from '@/utils/helper/localStorage';
import { Rings } from 'react-loader-spinner';

const AuthLayout = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state: any) => state.auth.isAdmin); // Add isAdmin state
  useLayoutEffect(() => {
    try {
      const token = localStorage.getItem('token');
    if (!isAuth && token) {
      const GetUser = async () => {
        setIsLoading(true);
        const response = await adminDetails();
        console.log(response, 987656);
        const user = response;
        dispatch(setAdmin(user));
        setIsLoading(false);
      };
      GetUser();
    }
    } catch (error) {
      console.log(error);
      
    }
    
  }, [dispatch, isAuth])
  useLayoutEffect(() => {
    // Use this effect to handle routing only on the client side
    LocalStorage.getItem('token').then((token) => {
      console.log("token", token);
      if (!token) {
        router.push('/admin/auth/login/');
      }
    });
  }, [router]);

  if (isLoading) {
    return <div className='w-full h-screen grid place-items-center'><Rings
    height="100"
    width="100"
    color="#0F452E"
    radius="6"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="rings-loading"
  /></div>;
  }

  if (!isAdmin) { // Add check for isAdmin
    return <div>You do not have permission to access this page.</div>;
  }

  return <>{children}</>;
};

export default AuthLayout;
