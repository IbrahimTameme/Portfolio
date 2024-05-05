import React from "react";
import Image from "next/image";

export default function WhyUs() {
  return(
    <>
      <div className="h-fit w-full mb-20">
        <div className="container mx-auto w-full flex">
          <div className="w-[50%] flex justify-start items-center">
            <Image
              src={"/Images/WhyUs-Image.svg"}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="w-[50%] flex flex-col" >
            <h1 className="text-8xl mb-6 text-primary">
              لماذا نحن ؟
            </h1>
            <div className="text-[25px]">
              <div className="flex justify-center items-center p-4">
                <Image src={'/Images/Icon1.svg'} alt="alt" width={100} height={100} />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates sunt eos
              .</p>
              <div className="flex justify-center items-center p-4">
                <Image src={'/Images/Icon2.svg'} alt="alt" width={100} height={100} />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates sunt eos
              .</p>
              <div className="flex justify-center items-center p-4">
                <Image src={'/Images/Icon3.svg'} alt="alt" width={100} height={100} />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates sunt eos
              .</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  
}
