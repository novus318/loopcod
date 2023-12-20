import React from 'react';
import logo from '@/images/logo.svg';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <img src={logo.src} alt="Logo" className="h-6 md:h-10 mr-4" />
                    </Link>
                </div>

                <div className="flex items-center space-x-4 gap-10">
                    <Link href="/about" className="hidden md:block text-base relative text-gray-900 overflow-hidden group">
                        <span className="relative z-1">ABOUT</span>
                        <span className="absolute inset-0 border-b border-gray-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="border-b text-center border-gray-400 text-white bg-black px-2 md:px-4 py-1 text-sm md:text-lg transition duration-300 ease-in-out rounded-md hover:bg-white hover:text-black"
                        >
                            Request a Quote
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
