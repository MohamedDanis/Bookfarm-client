import { NextPage } from 'next';
import Image from 'next/image';

const NotFoundPage: NextPage = () => {
    return (
        

<section className="block">
  <div className="px-5 md:px-10">
    <div className="mx-auto w-full max-w-7xl">
      <div className="">
        <div className="grid items-center  grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
          <div className="">
            <h1 className="font-bold mb-4 text-4xl md:text-6xl">Page Not Found </h1>
            <div className=" mb-6 md:mb-10 lg:mb-12">
              <p className="text-[#636262] text-sm sm:text-xl">It seems like you've wandered off the path. This page doesn't exist.</p>
            </div>
            <a href="/" className="inline-block cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white">Back Home</a>
          </div>
          <div className="">
            <Image src="/imgs/404pic.svg" alt="" width={200} height={400} className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default NotFoundPage;
