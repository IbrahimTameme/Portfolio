import Image from 'next/image';
import MobileMenuButton from './MobileMenuButton';

export default function Navbar() {
    return (
        <nav className=" bg-primary">
            <div className="px-20">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button, now a separate client component */}
                        <MobileMenuButton />
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between text-lg font-normal">
                        <div className="flex-shrink-0 flex items-center">
                            {/* <Image src="/logo.svg" alt="Your Company" width={32} height={32} /> */}
                           <a href="/" className='text-5xl text-secondary font-semibold italic'>Logo</a> 
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#" className="bg-secondary text-primary px-3 py-2 rounded-md hover:fo">Contact Us</a>
                                <a href="#" className="text-secondary hover:underline px-3 py-2 rounded-md">Why Us</a>
                                <a href="#" className="text-secondary hover:underline px-3 py-2 rounded-md">Our Projects</a>
                                <a href="#" className="text-secondary hover:underline px-3 py-2 rounded-md">Team</a>
                            </div>
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
