"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/router";
const links =[
  {
    name:'About',
    path:"/admin/dashboard"
  },
  {
    name:'Pricing',
    path:"/pricing"
  },
  {
    name:'Store',
    path:"/store"
  },
  {
    name:'Contact',
    path:"/admin/dashboard"
  },

]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter()
  const isMenuItemActive = (href: string) => {
    return router.pathname === href;
  };

  
  return (
    <nav
      className={cn("items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {
        links.map((item,index)=>(
          <Link href={item.path} key={index}
          className={`text-sm font-medium transition-colors ${isMenuItemActive(item.path)?"bg-stone-700 text-white rounded-full px-4 py-2":""} `}
          >
            {item.name}
          </Link>
        ))
      }
     
    </nav>
  )
}
