"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";
import { StarRating } from "@/container/user";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllBooks } from "@/api/admin/userRequests";
import axios from 'axios'
import useSWR from 'swr'
import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './store.module.css'
import bokcover from '../../public/imgs/bookcover.jpeg'
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";



interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

const books: Book[] = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 9.99 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99 },
  { id: 3, title: "1984", author: "George Orwell", price: 7.99 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: 10.99 },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 8.99 },
]
const fetcher =()=>{
 return axios.get('https://api.quotable.io/quotes?tags=inspirational,famous-quotes&maxLength=100')
  .then(res => res.data)
  .catch(error => console.error('Request failed:', error));
};
export default function Store() {
  const [cart, setCart] = useState<Book[]>([]);
  const [quotes,setQuotes]=useState<any[]>([]);
  const {data:quotesData,error:quotesError}=useSWR('/api/quotes',fetcher)
  const {data,error,isLoading,mutate}=useSWR('api/user/books',getAllBooks)
console.log(data);
  const addToCart = (book: Book) => {
    setCart([...cart, book]);
  };

  
 if(isLoading) return <>Loading</>
  return (
    <div>
      {/* <h1>Book Store</h1>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price.toFixed(2)}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <div>
        {cart.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price.toFixed(2)}</p>
          </div>
        ))}
      </div> */}
        <Container>
        <div className="mx-auto w-full">
        <h1 className="text-2xl mb-4 text-[#006A10] font-bold">TOP AUTHORS</h1>
        <div className="flex gap-4 overflow-scroll md:overflow-hidden">
            <div  className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/jk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">JK. Rowling</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/pc.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">Paulo Coelo</h1 >
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/sk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs" >ShakeSpeare</h1>
            </div>
            <div  className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/jk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">JK. Rowling</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/pc.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">Paulo Coelo</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/sk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">ShakeSpeare</h1>
            </div>
            <div  className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/jk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">JK. Rowling</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/pc.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">Paulo Coelo</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/sk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">ShakeSpeare</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/sk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">ShakeSpeare</h1>
            </div>
            <div  className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/jk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">JK. Rowling</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/pc.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">Paulo Coelo</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/sk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">ShakeSpeare</h1>
            </div>
            <div  className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/jk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">JK. Rowling</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/pc.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">Paulo Coelo</h1>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
        <Avatar className="h-16 w-16">
            <AvatarImage src="/imgs/sk.jpeg" alt="@shadcn" />
            <AvatarFallback>hi</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">ShakeSpeare</h1>
            </div>
     
        </div>
        <div className="my-6 flex gap-4 items-center flex-wrap md:flex-nowrap">
            <div className="md:w-4/12 w-full bg-[#634532] h-40 rounded-xl">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {
          quotesData?.results?.slice(0, 5).map((item:any, index:any) => (
            <SwiperSlide key={index} className="text-white flex flex-col p-5">
              <h1 className="text-xl font-medium">Today's Quotes</h1>
              <div className="flex flex-col justify-between items-center mt-4">
              <h2 className="text-base">
               " {item?.content} "
              </h2>
              <h2 className="self-end mt-2">
                - {item?.author}
              </h2>
              </div>
              </SwiperSlide>
          ))
        }
      </Swiper>
            </div>
            <div className="md:w-8/12 w-full border border-[#634532] h-40 flex gap-4 rounded-xl relative items-center">
            <h1
              className=" uppercase font-semibold  tracking-wide rotate-180 bg-[#634532] text-white h-full py-5 rounded-r-xl px-2"
              style={{ writingMode: "vertical-lr" }}
            >
              New Arrivals  
            </h1>
              <div className="flex flex-row items-center gap-4 w-full h-full overflow-x-auto md:overflow-hidden">
                        <Image src={bokcover} className=" w-[83px] h-[134px]" alt="coverimage" />
                        <Image src={bokcover} className=" w-[83px] h-[134px]" alt="coverimage" />
                        <Image src={bokcover} className=" w-[83px] h-[134px]" alt="coverimage" />
                        <Image src={bokcover} className=" w-[83px] h-[134px]" alt="coverimage" />
                        <Image src={bokcover} className=" w-[83px] h-[134px]" alt="coverimage" />
                        <Image src={bokcover} className=" w-[83px] h-[134px]" alt="coverimage" />
                        <Image src={bokcover} className=" w-[83px] h-[134px]" alt="coverimage" />
                        <Image src={bokcover} className=" w-[83px] h-[134px]" alt="coverimage" />
                    </div>
            </div>
        </div>
        <div>
            <div className="my-4">
                <h1 className="text-2xl font-semibold">Good Morning</h1>
                <h2 className="text-xl font-normal">Recommended For You</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-4">
              {
                data?.map((book:any,index:any)=>(
                  <div key={index} className="group hover:h-fit p-4 flex flex-col items-center bg-slate-100 rounded-xl gap-y-2">
                    <Link href={`/store/${book?._id}`}>
                    <div className={styles.imagecontainer}>
                      <Image src={book?.coverimage} width={175} height={250}  alt="coverimage" />
                    </div>
                    </Link>
                  <div className=" group-hover:transition-all  ">
                    <Button variant='primary' className="hidden  group-hover:flex gap-2 group-hover:transition-all group-hover:duration-1000 duration-100 ease-in-out">Add to Cart <ShoppingBag/></Button>
                  <h1 className="group-hover:hidden group-hover:transition-all group-hover:duration-1000  ease-in-out  font-medium">{book?.title}</h1>
                  <h2 className="group-hover:hidden group-hover:transition-all group-hover:duration-1000 duration-100 ease-in-out font-light">{book?.author}</h2>
                  </div>
                  <StarRating rating={3}/>
              </div>
                ))
              }
             
               
              
            </div>
        </div>
      </div>
        </Container>
     
    </div>
  );
}
