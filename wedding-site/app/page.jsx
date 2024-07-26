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
      <div className="flex items-center justify-center h-full py-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <img className="rounded-md object-cover h-full" src="looking.jpg" alt="fresh beets" />
      </div>
        <div className="m-12 mb-12 flex justify-center">
          <h1 className="font-serif text-8xl text-white leading-relaxed md:text-7xl sm:text-6xl"> Q|K </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 p-10 prose " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="mt-8 leading-relaxed ">
              <p className="text-2xl text-white mt-8 leading-relaxed">
                <span className="font-bold"> Date & Time: </span> <br/>
                March 29, 2025 at 3PM <br/><br/>
                <span className="font-bold">Venue: </span> <br/> Lovingston Winery, <br/> Lovingston, VA <br/><br/>
                <span className="font-bold">Attire: </span> <br/> Cocktail Attire <br/><br/>                
              </p>
              
              <div className="text-2xl text-white mt-8 leading-relaxed">
                <ul>
                  <li>
                    <span className="font-bold">Ceremony:</span> 3:00PM
                  </li>
                  <li>
                    <span className="font-bold">Cocktail Hour:</span> 4:00PM
                  </li>
                  <li>
                    <span className="font-bold">Reception:</span> 5:00PM
                  </li>
                </ul>
              </div>
            </div>
                    
          </div>
          <div className="w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="col-span-4 sm:col-span-4 relative">
              <img className="rounded-md object-cover" src="/us8.png" alt="fresh beets" />
            </div>

          </div>
        </div>
        <div className="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">              
          <p className="italic text-white text-2xl font-light m-8 leading-relaxed">
            Note: While we would love to have the little ones present, 
            we kindly request that no children will be present at the ceremony and reception due to space restriction, thank you. <br/><br/>
          </p>
        </div>
      </div>
      <Footer/>   
    </div> 
    </main>
  )
}

