"use client"
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";

interface CartCounterProps {
  count: number;
}

const CartCounter = ({ count }: CartCounterProps) => {
  const [cartcount, setCartCount] = useState(count || 1);
  const handleCount = () => {
    if (cartcount > 0) {
      setCartCount(cartcount - 1);
    }
  };

  return (
    <div className="border p-2 w-fit flex gap-6 items-center">
      <div
        className="w-8 h-8 bg-[#eee] flex justify-center items-center rounded cursor-pointer"
        onClick={handleCount}
      >
        <MinusIcon/>
      </div>
      <div className="w-5 flex justify-center items-center">
        <p className="select-none">{cartcount}</p>
      </div>
      <div>
        <div
          className="w-8 h-8 bg-jade-600 flex justify-center items-center rounded cursor-pointer"
          onClick={() => setCartCount(cartcount + 1)}
        >
           <PlusIcon/>
        </div>
      </div>
    </div>
  );
};

export default CartCounter;
