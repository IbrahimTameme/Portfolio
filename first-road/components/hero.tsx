import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="h-fit w-full bg-hero-image p-8">
        <div className="max-w-7xl mx-auto w-full flex">
          <div className="w-[50%] flex justify-start items-center">
            <Image
              src={"/Images/Hero-image.svg"}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-8xl mb-4">You'r first step To join the future</h1>
            <div>
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and moe recently with desktop
              publishinpopularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
