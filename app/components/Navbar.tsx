'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white z-50 top-0 sticky mx-auto transition-shadow duration-500 nav ${hasScrolled ? 'shadow-lg' : ''}`}>
      <div className="flex items-center justify-between py-4">

        {/* Başlık */}
        <div className="text-black font-bold text-xl ml-3 sm:text-2xl lg:text-lg xl:text-2xl">Capslock Software</div>

        {/* Sayfalar */}
        <div className="hidden text-lg space-x-5 flex-grow justify-center lg:flex lg:mr-12 2xl:text-2xl">
          <Link
            href="/"
            className={`${
              pathname === '/' ? 'text-red-700' : 'text-black'
            } hover:text-red-700`}
          >
            Home
          </Link>
          <Link
            href="/team"
            className={`${
              pathname === '/team' ? 'text-red-700' : 'text-black'
            } hover:text-red-700`}
          >
            Team
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === '/contact' ? 'text-red-700' : 'text-black'
            } hover:text-red-700`}
          >
            Contact
          </Link>
          <Link
            href="/service"
            className={`${
              pathname === '/service' ? 'text-red-700' : 'text-black'
            } hover:text-red-700`}
          >
            Service
          </Link>
        </div>

        <button className="hidden border-gray-500 border mr-5 rounded md:text-sm md:px-2 md:py-1 lg:block 2xl:text-lg 2xl:px-3">
          EN
        </button>

        {/* Hamburger menü - mobil ekran */}
        <div className="lg:hidden mr-3">
          <button onClick={toggleSidebar}>
            <FiMenu className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobil için sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-20`}
      >
        <div className="flex items-center justify-between p-4">
          <button onClick={toggleSidebar}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <Link
            href="/"
            className={`${
              pathname === '/' ? 'text-red-700' : 'text-black'
            } hover:text-red-700 text-xl`}
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            href="/team"
            className={`${
              pathname === '/team' ? 'text-red-700' : 'text-black'
            } hover:text-red-700 text-xl`}
            onClick={toggleSidebar}
          >
            Team
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === '/contact' ? 'text-red-700' : 'text-black'
            } hover:text-red-700 text-xl`}
            onClick={toggleSidebar}
          >
            Contact
          </Link>
          <Link
            href="/service"
            className={`${
              pathname === '/service' ? 'text-red-700' : 'text-black'
            } hover:text-red-700 text-xl`}
            onClick={toggleSidebar}
          >
            Service
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
