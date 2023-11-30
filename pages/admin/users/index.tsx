import React from 'react'
import AuthLayout from '@/components/layout/AuthLayout'
import Container from '@/components/ui/container'
import { AdminContainer } from '@/container'
import MultiForm from '@/components/entry/multiform'
import Table from '@/components/general/data-table/Table'
import SideLayout from '@/components/layout/Sidebar/SidebarLayout'

const Users = () => {
  return (
    <AuthLayout>
    <div>
       <Container className='p-6'>
        <AdminContainer.AddUser/>
        <Table/>
        {/* <AdminContainer.UserTable/> */}
       </Container>
    </div>
    </AuthLayout>
  )
}
export default Users