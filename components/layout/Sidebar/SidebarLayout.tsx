"use client"
import React, { PropsWithChildren, useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar2";
import { Header } from "..";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { adminDetails } from "@/api/admin/adminAuthRequest";
import { setAdmin } from "@/redux/userSlice";
const SideLayout = (props: PropsWithChildren) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const isAdmin = useSelector((state:any)=> state.auth.isAdmin)
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (!isAdmin && token) {
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
  }, [dispatch, isAdmin])
  const router = useRouter()
 
  console.log(isAdmin);
 return (

   <div className="grid grid-rows-header">
     <div className="bg-white shadow-sm z-10 h-[100px] sticky top-0">
       {/* <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} /> */}
       <Header onMenuButtonClick={() => setShowSidebar((prev) => !prev)}/>
     </div>

     <div className="grid md:grid-cols-sidebar mt-8">
       <div className="">
           <Sidebar open={showSidebar} setOpen={setShowSidebar}/>
       </div>
       {props.children}
     </div>
   </div>

 )
    
    
 
};
export default SideLayout;
