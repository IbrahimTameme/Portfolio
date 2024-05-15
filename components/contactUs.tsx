import Image from "next/image";
import React from "react";

export default function ContactUS() {
  return (
    <>
    <div className="flex items-center">

      <div className="bg-[url('/images/ContactUs.SVG')] bg-no-repeat bg-fit  flex-col gap-5" >
        <form action="">
          <label htmlFor="">asd</label>
          <input type="text" />
        </form>

      </div>
      <div className="flex">
        <Image src={'/Images/ContatUs-Image.svg'} width={300} height={650} alt="" />
      </div>

    </div>
    </>
  )
}
