import Image from "next/image";
import React from "react";

export default function ContactUS() {
  return (
    <>
    <div className="flex">
      <div className="flex">
        <Image src={'/Images/ContatUs-Image.svg'} width={300} height={650} alt="" />
      </div>

      <div className="bg-[url('/images/ContactUs.SVG')] bg-no-repeat w-full flex-col gap-5" >

      </div>
    </div>
    </>
  )
}
