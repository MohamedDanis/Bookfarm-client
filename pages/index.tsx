"use client"
import Image from 'next/image'
import { Inter,Plus_Jakarta_Sans } from 'next/font/google'
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import { ClientHeader, Header } from '@/components/layout';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return <>
  <Container>

<section className="block">
{/* <ClientHeader/> */}
  <div className="py-16  mx-auto w-full max-w-7xl px-5 md:px-10">
    <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
      <div className="max-[991px]:max-w-[720px]">
        <h2 className={`font-bold text-3xl md:text-6xl mb-6 md:mb-10 lg:mb-12 ${jakarta.className}`}>Unlock Top Books<br/> for Meaningful<br/> Reading.</h2>
        <div className="grid-cols-[0.5fr_0.5fr] grid max-w-[400px] gap-4">
          <div className="flex-row flex items-center max-[479px]:mt-2 ml-0 sm:ml-2 md:ml-0 mr-0 sm:mr-2 md:mr-0">
            <Image src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg" alt="" width={20} height={20} className="inline-block mr-2"/>
            <p className="text-[#636262] max-[479px]:text-sm">Unlimited Books</p>
          </div>
          <div className="flex-row flex items-center max-[479px]:mt-2 ml-0 sm:ml-2 md:ml-0 mr-0 sm:mr-2 md:mr-0">
            <Image src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg" alt="" width={20} height={20} className="inline-block mr-2"/>
            <p className="text-[#636262] max-[479px]:text-sm">Community Access</p>
          </div>
          <div className="flex-row flex items-center max-[479px]:mt-2 ml-0 sm:ml-2 md:ml-0 mr-0 sm:mr-2 md:mr-0">
            <Image src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg" alt="" width={20} height={20} className="inline-block mr-2"/>
            <p className="text-[#636262] max-[479px]:text-sm">Low Price</p>
          </div>
          <div className="flex-row flex items-center max-[479px]:mt-2 ml-0 sm:ml-2 md:ml-0 mr-0 sm:mr-2 md:mr-0">
            <Image src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg" alt="" width={20} height={20} className="inline-block mr-2"/>
            <p className="text-[#636262] max-[479px]:text-sm">Exclusive Events</p>
          </div>
        </div>
        <div className="mb-10 mt-10 w-full max-w-md [border-bottom:1px_solid_rgb(217,_217,_217)]">
        </div>
        <a href="#" className="inline-block items-center bg-[#462600] px-6 py-3 text-center font-semibold text-white">Subscribe Now</a>
      </div>
      <div className="relative h-full lg:h-[500px] max-h-[700px] overflow-visible max-[991px]:left-4 w-[85%] md:w-[95%] lg:w-full">
    <Image fill={true} src="/imgs/ideogram.jpeg" alt="" className="mx-auto aspect-square block h-full w-full max-w-[800px] rotate-[3.5deg] object-cover rounded-2xl animate-tiny-bounce"/>
    <div className="absolute bottom-[0%] left-[-16px] right-[0%] top-4 -z-[1] h-full w-full bg-[#462600] rounded-2xl">
    </div>
  </div>
    </div>
  </div>
</section>
    </Container>
    <div className="flex gap-4 mt-12">
      <Marquee className="flex justify-between w-full" autoFill={true}>
        <div className=" relative w-[200px] h-[300px] mr-8" style={{background:`linear-gradient(180deg, rgba(255, 255, 255, 0.00) 49.18%, #604C4C 100%)`}}>
        <Image src="/imgs/rectangle-33.png" alt="" fill={true} className="mr-8"/>
        </div>
        <div className=" relative w-[200px] h-[300px] mr-8" style={{background:`linear-gradient(180deg, rgba(255, 255, 255, 0.00) 49.18%, #604C4C 100%)`}}>
        <Image src="/imgs/rectangle-34.png" alt="" fill={true} className="mr-8"/>
        </div>
        <div className=" relative w-[200px] h-[300px] mr-8" style={{background:`linear-gradient(180deg, rgba(255, 255, 255, 0.00) 49.18%, #604C4C 100%)`}}>
        <Image src="/imgs/rectangle-35.png" alt="" fill={true} className="mr-8"/>
        </div>
        <div className=" relative w-[200px] h-[300px] mr-8" style={{background:`linear-gradient(180deg, rgba(255, 255, 255, 0.00) 49.18%, #604C4C 100%)`}}>
        <Image src="/imgs/rectangle-36.png" alt="" fill={true} className="mr-8"/>
        </div>
      </Marquee>
      </div>
  </>;
}
