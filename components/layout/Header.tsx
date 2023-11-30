import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { setAdmin } from '@/redux/userSlice';
import {MainNav,UserNav} from "@/pages/admin/dashboard/components"
import { useDispatch, useSelector } from 'react-redux';
import { adminDetails } from '@/api/admin/adminAuthRequest';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from "react";
import LocalStorage from '@/utils/helper/localStorage';
import { Menu } from "lucide-react";
import { ThemeToggle } from "../general";
import { Bars3Icon } from "@heroicons/react/24/outline";
type Props = {
  onMenuButtonClick(): void;
};

const Header = (props: Props) => {
  const isAuth = useSelector((state:any)=>state.auth.isAuthenticated)
  // console.log(isAuth,99);
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
        dispatch(setAdmin(user));
        setIsLoading(false);
      };
      GetUser();
    }
  }, [dispatch, isAuth])
  // useLayoutEffect(() => {
  //   // Use this effect to handle routing only on the client side
  //   LocalStorage.getItem('token').then((token) => {
  //     // console.log("token", token);
  //     if (!token) {
  //       router.push('/admin/auth/login/');
  //     }
  //   });
  // }, [router]);
  return (
    <header className="w-full h-auto mb-8 sticky dark:bg-[#020817]">
    <Container>
      <div className="flex justify-between px-4 items-center py-3">
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
        <div className="relative">
          <Image src="/imgs/logo-bf.png" alt="logo" width={100} height={50}/>
        </div>
        {/* <MainNav className="hidden md:flex"/> */}
       
       
        {
          isAuth ?(
            <div className="flex gap-4 items-center">
               <ThemeToggle/>
               <UserNav/>
            </div>
          )  : (
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
      </div>
    </Container>
  </header>
  )
}

export default Header