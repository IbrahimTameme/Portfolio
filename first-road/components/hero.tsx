import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="h-fit w-full bg-hero-image p-8 pt-32">
        <div className="container mx-auto w-full flex">
          <div className="w-[50%] flex flex-col text-white pe-24">
            <h1 className="text-8xl mb-6">
              خطوتك الأولى نحو الامام
            </h1>
            <div className="text-xl mb-6">
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and moe recently with desktop
              publishinpopularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and
            </div>
            <button className="bg-secondary text-black px-5 py-4 text-4xl w-fit button-hero box-shadow-semi-border border-solid border-4 border-black glass-hover" type="button">تواصل معنا !</button>
          </div>
          <div className="w-[50%] flex justify-end items-center">
            <Image
              src={"/Images/Hero-image.svg"}
              width={700}
              height={700}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
