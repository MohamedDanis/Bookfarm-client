// components/layout/Navbar.tsx
import React from "react";
 import { Bars3Icon } from "@heroicons/react/24/outline";
 import { Button } from "@/components/ui/button";
 import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import { setUser } from '@/redux/userSlice';
import {MainNav,UserNav} from "@/pages/admin/dashboard/components"
import { useDispatch, useSelector } from 'react-redux';
import { adminDetails } from '@/api/admin/adminAuthRequest';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from "react";
import LocalStorage from '@/utils/helper/localStorage';
type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  const isAuth = useSelector((state:any)=>state.auth.isAuthenticated)
  console.log(isAuth,99);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (!isAuth && token) {
      const GetUser = async () => {
        setIsLoading(true);
        const response = await adminDetails();
        console.log(response, 987656);
        const user = response;
        dispatch(setUser(user));
        setIsLoading(false);
      };
      GetUser();
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
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-full fixed z-10 px-4 justify-between  h-auto": true, //positioning & styling
      })}
    >
       <div className="relative">
          <Image src="/imgs/logo-bf.png" alt="logo" width={100} height={50}/>
        </div>
        {
          isAuth ? <UserNav/> : (
            <nav className="flex gap-4 items-center">
            <Button asChild variant="ghost" className="">
              <Link href="/login" className=" px-4 py-1 ">
                Login
              </Link>
            </Button>
            <Button asChild variant="secondary" className="">
              <Link href="/register" className=" px-4 py-1">
                Signup
              </Link>
            </Button>
            
          </nav>
          )
        }
      <div className="flex-grow"></div> {/** spacer */}
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
export default Navbar;

