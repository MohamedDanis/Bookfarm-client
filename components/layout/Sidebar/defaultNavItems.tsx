// components/layout/defaultNavItems.tsx
import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar2";
import { CalendarCheck2Icon } from "lucide-react";
import Image from "next/image";

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Books",
    href: "/admin/books",
    icon: <BookOpenIcon className="w-6 h-6" />,
  },
  {
    label: "Categories",
    href: "/admin/genre",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
  {
    label: "Book Requests",
    href: "/admin/requests",
    icon: <Image src='/interview.png' alt="icon" width={24} height={24}/>,
  },
  {
    label: "Events",
    href: "/admin/requests",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
];
