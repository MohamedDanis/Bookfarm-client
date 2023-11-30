import Container from "@/components/ui/container";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { CartCounter } from "@/container/user";
import { useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const cart = () => {
  const cart = useSelector((state: any) => state.carts.products);
  const quantity = useSelector((state: any) => state.carts.quantity);
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  console.log(cart)
  console.log(cart[2]?.productId);
  
  return (
    <Container className="flex gap-9">
      <div className=" w-2/3">
        <div className="border border-[#d6bbaa] rounded px-5 py-2 w-full flex justify-between items-center">
          <h1 className="flex gap-2 items-center text-xl font-medium">
            My Cart{" "}
            <span className="bg-[#B7FF6C] text-base px-2 py-[2px] rounded-full flex justify-center items-center w-fit">
              {quantity}
            </span>
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <h2 className="flex items-center cursor-pointer font-normal">
                Filter <ChevronDown className="w-5 h-5" />
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          {cart.map((item: any, index: any) => (
            <>
            <Separator className="mb-6 mt-4 bg-[#634532]"/>
             <div className="items-top flex space-x-2" key={index}>
              <Checkbox id="terms1" className="w-5 h-5" />
              <div className="grid gap-1.5 leading-none">
                <h1 className="text-xl font-medium leading-4">{item?.productId?.title}</h1>
                <div className="w-full flex ">
                  {/* <Image
                    src={item?.productId?.coverimage}
                    alt="cover image"
                    width={70}
                    height={100}
                  /> */}
                  <div className="">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam quisquam, ut quidem quaerat nemo possimus iste
                      magni, odio nobis consequatur eaque ab et! Ipsa beatae
                      temporibus est officia. Omnis, corporis!
                    </p>
                    <div>
                      <h1>Rs. 200</h1>
                      <CartCounter count={item?.quantity} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
           
          ))}
        </div>
      </div>
      <div className="w-1/3 border h-[500px]"></div>
    </Container>
  );
};

export default cart;
