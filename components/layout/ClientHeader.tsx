import React, { useLayoutEffect, useState } from 'react'
import Container from '../ui/container'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ThemeToggle } from '../general'
import { MainNav, UserNav } from '@/pages/admin/dashboard/components'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/redux/userSlice'
import {setItems} from '@/redux/cartSlice'
import { clientDetail, showCart } from '@/api/admin/userRequests'
import { UserAvatar } from '@/container/user'
import { ShoppingBag } from 'lucide-react'
import { set } from 'date-fns'
import { useRouter } from 'next/router'

const ClientHeader = () => {
    const isAuth = useSelector((state:any)=>state.auth.isAuthenticated)
    const cart = useSelector((state:any)=>state.carts.products)
    const quantity = useSelector((state:any)=>state.carts.quantity)
    const dispatch = useDispatch()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    useLayoutEffect(() => {
        const token = localStorage.getItem('token');
        if (!isAuth && token) {
          const GetUser = async () => {
            setIsLoading(true);
            const response = await clientDetail();
            console.log(response, 987656);
            const user = response;
            dispatch(setUser(user));
            setIsLoading(false);
          };
          GetUser();
        }
        if(!token){
          router.push('/')
          return
        }
      
        if(cart.length === 0){
          const getCart =async () => {
            const res = await showCart()
            dispatch(setItems(res.products))
          }
          getCart()
        }
        console.log(quantity);
        
      }, [dispatch, isAuth,cart])
      console.log(isAuth);
      
  return (
    <header className="w-full h-auto mb-8 sticky">
    <Container>
      <div className="flex justify-between px-4 items-center py-3">
      {/* <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button> */}
        <div className="relative">
          <Link href='/'>
          <Image src="/imgs/logo-2.png" alt="logo" width={100} height={50}/>
          </Link>
        </div>
        <MainNav className="hidden md:flex"/>
      
       
        {
          isAuth ?(
            <div className="flex gap-4 items-center">
              <Link href='/cart' className='relative flex'>
              <ShoppingBag/>
              {
                quantity > 0 && (
                  <>
                  
                    <span className="animate-ping absolute right-2 inline-flex h-3 w-3 rounded-full bg-[#7fa885] opacity-75"></span>
                  <span className="relative right-2 inline-flex rounded-full h-3 w-3 bg-[#547C5A]"></span>
                 
                  </>
                
                )
              }
             
              </Link>
              <ThemeToggle/>
               <UserAvatar/>
            </div>
          )  : (    
            <nav className="flex gap-4 items-center">
                <ThemeToggle/>
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

export default ClientHeader