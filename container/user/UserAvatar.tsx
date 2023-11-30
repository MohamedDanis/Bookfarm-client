import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import { useRouter } from 'next/navigation'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useDispatch,useSelector } from "react-redux"
  import { resetUser } from "@/redux/userSlice"
import Link from 'next/link'
const UserAvatar = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector((state:any)=> state.auth.user)
    console.log(user,98);
    
    function getInitials(name: string): string {
        const names = name.split(" ");
        let initials = "";
        names.forEach((n) => {
          initials += n[0];
        });
        return initials.toUpperCase();
      }
      const handleLogout = ()=>{
        dispatch(resetUser())
        localStorage.removeItem('token')
        router.push('/login')
      }
      console.log(user);
      
  return (
    <div>
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-14 w-14 rounded-full ">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
             {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>    
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href='/user/profile'>
            Profile
            </Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href='/user/dashboard'>
           Dashboard
            </Link>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default UserAvatar