"use client"
import React, { useEffect, useState,useCallback } from "react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { addToCart, showBookDetails, showCart } from "@/api/admin/userRequests";
import Image from "next/image";
import Container from "@/components/ui/container";
import { CartCounter, StarRating } from "@/container/user";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import Breadcrumb from "@/components/general/BreadCrump";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "@/redux/cartSlice";

const BookDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [cartclicked,setCartClicked] = useState(false)
  const id = router.query.id as string;
  const [key, setKey] = useState(0);
  const cart = useSelector((state:any)=>state.carts.products)
  console.log(cart);
  const fetcher = useCallback((id:any) => showBookDetails(id), []);
  const memoizedFetcher = useCallback(() => {
    return fetcher(id);
  }, [id, fetcher])
  const { data, error, isLoading } = useSWR(`/api/bookDetails`, memoizedFetcher
);
console.log(data);

useEffect(() => {
  console.log(data);
  console.log(cart);
  
  let itemIndex = cart.findIndex((item:any) => item?.productId?._id === data?._id);
  console.log(data?.title);
  console.log(itemIndex);
  if(itemIndex > -1){
    setCartClicked(true)
  }
  mutate(`/api/bookDetails`) 
  return ()=>{
    setCartClicked(false)
  }
  
}, [data])

  const handleCart =async () => {
    const res = await addToCart({
      data
    })
    console.log(res);
    const getCart =async () => {
      const res1 = await showCart()
      dispatch(setItems(res1.products))
    }
    await getCart()
    if(res !== undefined){
      setCartClicked(true)
    }
    
  }
  return (
    <Container>
      <Breadcrumb/>
      <div className="flex gap-20">
        {
          isLoading ? (
            <Skeleton className="w-[300px] h-[400px]"/>
          ):(
            <Image
            src={data?.coverimage}
            alt="bookcover"
            className=""
            width={300}
            height={300}
          />
          )
        }
       
        <section className="flex flex-col gap-y-6 w-2/3">
          <h2 className="text-lg font-medium">Rs.120</h2>
          <h1 className="text-5xl font-bold">
            {data?.title}
          </h1>
          <StarRating rating={4} />
          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            dolore labore rerum maiores officiis aspernatur unde ipsa, adipisci
            itaque eos dolores, obcaecati quam voluptate corporis voluptatum
            nulla commodi natus sunt.
          </p>
          <div className="flex gap-3">
            {
              cartclicked && (
                <CartCounter count={1}/>
              )
            }
            <Button className="bg-[#547C5A] px-8 py-2" onClick={handleCart}>{cartclicked ? "ADDED":"ADD TO CART"}</Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className=" border-2 p-2 w-fit flex justify-center items-center rounded-xl">
                    <Bookmark />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-primary">
                  <p className="text-white text-xs">Add to Wishlist</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default BookDetails;
