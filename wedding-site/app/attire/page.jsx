"use client"
import Header from '../components/header';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Breadcrumb from '../components/breadcrumbs';
import Footer from '../components/footer';

export default function VenuePage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main>
          <Header/>
    <div className="min-h-screen bg-cover bg-fixed bg-yellow-bg">
      <div className='flex justify-center py-6'>
          <Breadcrumb links={[{ href: '/attire', text: 'Attire' }]} />
      </div>
      <div className="max-w-10xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20">
        <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 p-10 prose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="md:py-20 flex justify-center">
            <h1 className="text-5xl md:text-4xl sm:text-3xl text-white leading-tight font-serif mb-12"> Attire: Cocktail </h1>
            </div>
            <div className="text-2xl text-white bold mt-8 leading-relaxed">
              <p>
                The ceremony will be outdoor and the reception will take place indoor, so we suggest our guests dress comfortably. <br/><br/>
                At some point during the reception, the bride will honor her Vietnamese heritage by changing into red clothing, so we kindly ask our guests to refrained from wearing red on this day. <br/><br/>
                We want our guests to have fun and feel good, so please feel free to bring a pair of comfortable shoes to change into during dance time since we want to see you showing off your awesome dance moves!               
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 py-8 px-10 grid grid-cols-4 gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="col-span-4 sm:col-span-4 relative">
              <img className="rounded-md object-cover" src="/us7.png" alt="fresh beets" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>  
    </div>    
    </main>
  )
}