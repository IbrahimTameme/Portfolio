import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="h-fit w-full bg-hero-image p-8 pt-32">
        <div className="container mx-auto w-full flex flex-col lg:flex-row lg:justify-center">
          <div className="w-[50%] flex flex-col text-white pe-24">
            <h1 className="text-7xl mb-6">خطوتك الاولى للانظمام للمستقبل</h1>
            <div className="text-xl mb-6">
              في شركتنا، نجمع بين الإبداع والجودة العالية في تصميم المواقع
              الإلكترونية. نستخدم أحدث التقنيات لتوفير تجارب مستخدم مميزة
              وتصميمات تلبي توقعاتكم وتعزز نجاحكم في عالم الإنترنت.
            </div>
            <button
              className="bg-secondary text-black px-5 py-4 text-4xl w-fit button-hero box-shadow-semi-border border-solid border-4 border-black glass-hover"
              type="button"
            >
              تواصل معنا !
            </button>
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
