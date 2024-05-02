import Image from "next/image";
import React from "react";

export default function Footer() {
    return <div>
        <div className="flex h-fit w-full">
            <div className=" bg-red-500 w-[50%]">
                Content</div>
            <div className=" bg-green-500/50 w-[50%]">
                <Image src={'/Images/undraw_complete_design_re_h75h.svg'} width={500} height={500} alt=""/>
            </div>
        </div>
    </div>;
  }