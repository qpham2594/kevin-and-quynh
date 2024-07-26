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
      <nav className="flex flex-wrap items-center justify-between p-3 bg-gray-200" style={{ backgroundColor: '#996666' }}>
        <Link href="/" className='font-serif text-3xl text-bold text-white'>
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
              style={{ filter: 'invert(1)' }}
            />
            <img
              className={`toggle ${menuOpen ? 'block' : 'hidden'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              style={{ filter: 'invert(1)' }}
            />
          </button>
        </div>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-white md:border-none`}
        >
          <Link href="/" className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none">
              Home
          </Link>
          <Link href="/schedule" className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none"> 
              Schedule
          </Link>
          <Link href="/attire" className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none">
              Attire
          </Link>
          <Link href="/wedding-party" className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none">
              Wedding Party
          </Link>
          <Link href="/travel-lodging" className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none">
              Travel and Lodging
          </Link>
          <Link href="/vendors" className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none">
              Vendors

          </Link>
          <Link href="/registry" className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none">
              Registry
          </Link>
          <Link href="/faq" className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none">
              FAQ        
          </Link>
          <Link href="https://forms.gle/kDBt6qnMRgbMcGHG6"
            className="block md:inline-block hover:text-blue-200 px-3 py-3 border-b-2 text-white md:border-none md:hidden">
              RSVP Here
        </Link>
        </div>
        <Link href="https://forms.gle/kDBt6qnMRgbMcGHG6"
                    className={`hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-black text-white md:rounded ${
                        menuOpen ? 'block' : 'hidden'
                      }`} style={{backgroundColor: '#30346D'}}
                    target="_blank">
            RSVP Here
        </Link>
      </nav>
    </header>
  );
}

