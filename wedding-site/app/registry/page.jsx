"use client"
import Header from '../components/header';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function RegistryPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main>
          <Header/>
    <div className="min-h-screen bg-cover bg-fixed bg-yellow-bg">
      <div className="max-w-10xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20">
        <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 p-10 prose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="md:py-20 flex justify-center">
            <h1 className="text-6xl text-white leading-relaxed md:text-5xl sm:text-4xl font-serif mb-4"> Registry </h1> 
            </div>
            <div className="text-2xl text-white font-light mt-6 leading-relaxed">
              <p>
              Your presence at our wedding is the greatest gift we could ask for. <br/><br/>
              If you do wish to honor us with a gift, a contribution towards our future, such as our first home or our honeymoon, would be greatly appreciated.              
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 py-8 px-10 grid grid-cols-4 gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="col-span-4 sm:col-span-4 relative">
              <img className="rounded-md object-cover" src="/us11.png" alt="fresh beets" />
            </div>
          </div>
        </div>
      </div>
    </div>    
    </main>
  )
}