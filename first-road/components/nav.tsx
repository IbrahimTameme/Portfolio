import Image from 'next/image';
import MobileMenuButton from './MobileMenuButton';

export default function Navbar() {
    return (
        <nav className=" bg-secondary">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button, now a separate client component */}
                        <MobileMenuButton />
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            {/* <Image src="/logo.svg" alt="Your Company" width={32} height={32} /> */}
                           <h1 className='text-2xl font-semibold italic hover:underline'>Logo</h1> 
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:fo">Dashboard</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
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
