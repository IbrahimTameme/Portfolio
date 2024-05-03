"use client";

import { useState, useEffect } from "react";
import MobileMenuButton from "./MobileMenuButton";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-primary fixed inset-x-0 top-0 ${isSticky ? "sticky-header" : ""}`}>
      <nav>
        <div className={`px-20 ${isSticky ? "py-3" : "py-4"}`}>
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button, now a separate client component */}
              <MobileMenuButton />
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between text-lg font-normal navbar">
              <div className="hidden sm:block sm:ml-6">
                <div className={`flex items-center justify-center nav-section font-semibold ${isSticky ? "text-black" : "text-body-color"}`}>
                  <a
                    href="#"
                    className="bg-body-color text-primary text-xl px-5 py-4 nav-item-focus glass-hover box-shadow-semi-border border-solid border-4 border-black me-8"
                  >
                    <span>تواصل معنا</span>
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 me-8 nav-item"
                  >
                    لماذا نحن
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 me-8 nav-item"
                  >
                    مشاريعنا
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 me-8 nav-item"
                  >
                    الفريق
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                {/* <Image src="/logo.svg" alt="Your Company" width={32} height={32} /> */}
                <a
                  href="/"
                  className="text-5xl text-body-color font-semibold italic"
                >
                  Logo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          {/* Additional mobile menu content could be added here */}
        </div>
      </nav>
    </header>
  );
}
