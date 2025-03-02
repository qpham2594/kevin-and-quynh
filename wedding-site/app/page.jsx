"use client"
import Header from "./components/header";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Countdown from "./components/countdown";
import Breadcrumb from "./components/breadcrumbs";
import Footer from "./components/footer";

export default function ModernBeets() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main>
          <Header/>
    <div className="min-h-screen bg-cover bg-fixed bg-yellow-bg">
      <div className='flex justify-center py-6'>
        <Breadcrumb links={[]} />
      </div>
      <div className="max-w-10xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20">
      <div className="flex justify-center">
        <Countdown />
      </div>

        <div className="m-12 mb-12 flex justify-center">
          <h1 className="font-serif text-8xl text-white leading-relaxed md:text-7xl sm:text-6xl"> Q|K </h1>
        </div>
        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl">
  
        <div className="w-full lg:w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
  <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center">

      {/* Image Section */}
      <div className="w-full lg:w-1/2 mx-auto mt-8 lg:mt-0">
      <div className="relative flex justify-center">
        <img className="rounded-md object-cover w-2/3 mx-auto" src="/quyn.jpg" alt="engagement photo" />
      </div>
    </div>

    {/* Table Section */}
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="w-full mx-auto max-w-7xl mt-8">
        <table className="table-auto w-full text-white text-2xl">
          <tbody>
            <tr className="border-b border-white">
              <td className="px-4 py-2 font-bold">Date & Time</td>
              <td className="px-4 py-2">March 29, 2025 at 3PM</td>
            </tr>
            <tr className="border-b border-white">
              <td className="px-4 py-2 font-bold">Venue</td>
              <td className="px-4 py-2">Lovingston Winery, Lovingston, VA</td>
            </tr>
            <tr className="border-b border-white">
              <td className="px-4 py-2 font-bold">Attire</td>
              <td className="px-4 py-2">Cocktail Attire</td>
            </tr>
          </tbody>
        </table>

        {/* Note Section */}
        <div className="my-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <p className="italic text-white text-2xl font-light mx-8 leading-relaxed">
            Note: While we would love to have the little ones present, we kindly request that no children will be present at the ceremony and reception due to space restrictions. Thank you. <br /><br />
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
      <Footer/>   
    </div> 
    </main>
  )
}

