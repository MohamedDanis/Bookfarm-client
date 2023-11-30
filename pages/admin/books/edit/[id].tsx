import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { EditForm } from '@/components/entry'
import AuthLayout from '@/components/layout/AuthLayout'
import { showBookDetails } from '@/api/admin/BookRequests'
import Container from '@/components/ui/container'
import Breadcrumb from '@/components/general/BreadCrump'
const EditBook = () => {
    const router = useRouter()
    const id=router.query.id as string
    const [bookdetails,setBookDetails]=useState<any>()
    useEffect(() => {
      const getBookDetails = async ()=>{
        console.log(id,'hi');
          const res=await showBookDetails(id)
          setBookDetails(res)
        }
        if(id===undefined){
          console.log('fetching data')
        }else{
          getBookDetails()
        }
      }, [id])
  return (
    <AuthLayout>
    <div>
        {/* <h1 className='text-3xl font-semibold'>Basic Details</h1> */}
        {
          bookdetails && (<Container className='max-w-3xl px-4'>
            <Breadcrumb terminalPath={bookdetails?.title} />
            <EditForm bookdetails={bookdetails}/>
            </Container>)
        }
        
    </div>
    </AuthLayout>
 
  )
}

export default EditBook