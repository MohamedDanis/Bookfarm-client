"use client";
import React, { useState } from "react";
import Container from "@/components/ui/container";
import AuthLayout from "@/components/layout/AuthLayout";
import { AdminContainer } from "@/container";
import { SampleForm } from "@/components/entry";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SideLayout from "@/components/layout/Sidebar/SidebarLayout";

const Users = () => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <AuthLayout>
      <div className="">
        <Container className="p-6">
          <AdminContainer.AddBook />
          <AdminContainer.BookTable />
        </Container>
      </div>

    </AuthLayout>
  );
};

export default Users;
