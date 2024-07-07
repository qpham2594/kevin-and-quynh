"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header text-white font-serif">
      <nav className="flex flex-wrap items-center justify-between p-3 bg-gray-200">
        <Link href="/" className='font-serif text-3xl text-bold text-blue-900'>
            Q|K
        </Link>
        <div className="flex md:hidden">
          <button
            id="hamburger"
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            <img
              className={`toggle ${menuOpen ? 'hidden' : 'block'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              className={`toggle ${menuOpen ? 'block' : 'hidden'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none`}
        >
          <Link href="/" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
              Home
          </Link>
          <Link href="/schedule" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"> 
              Schedule
          </Link>
          <Link href="/attire" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
              Attire
          </Link>
          <Link href="/wedding-party" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
              Wedding Party
          </Link>
          <Link href="/travel-lodging" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
              Travel and Lodging
          </Link>
          <Link href="/vendors" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
              Vendors

          </Link>
          <Link href="/registry" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
              Registry
          </Link>
          <Link href="/faq" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
              FAQ        
          </Link>
        </div>
        <Link href="https://forms.gle/kDBt6qnMRgbMcGHG6"
                    className={`toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded ${
                        menuOpen ? 'block' : 'hidden'
                      }`}
                    target="_blank">
            RSVP Here
        </Link>
      </nav>
    </header>
  );
}

