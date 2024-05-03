import Image from "next/image";
import MobileMenuButton from "./MobileMenuButton";

export default function Navbar() {
  return (
    <nav className=" bg-primary">
      <div className="px-20 py-3">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button, now a separate client component */}
            <MobileMenuButton />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between text-lg font-normal navbar">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center justify-center space-x-8 nav-section font-semibold">
                <a
                  href="#"
                  className="bg-body-color text-primary text-xl px-5 py-4 nav-item-focus glass-hover box-shadow-semi-border border-solid border-4 border-black"
                >
                  <span>Contact Us</span>
                </a>
                <a href="#" className="text-body-color px-3 py-2 nav-item">
                  Why Us
                </a>
                <a href="#" className="text-body-color px-3 py-2 nav-item">
                  Our Projects
                </a>
                <a href="#" className="text-body-color px-3 py-2 nav-item">
                  Team
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
  );
}
