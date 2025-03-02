"use client"
import Header from '../components/header';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Breadcrumb from '../components/breadcrumbs';
import Footer from '../components/footer';

export default function SchedulePage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main>
          <Header/>
    <div className="min-h-screen bg-cover bg-fixed bg-yellow-bg">
      <div className='flex justify-center py-6'>
        <Breadcrumb links={[{ href: '/schedule', text: 'Schedule' }]} />
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12">
  <div className="flex flex-col lg:flex-row justify-center"> {/* Centering the content horizontally */}
    {/* Text Section */}
    <div className="w-full lg:w-1/2 p-10 prose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
      <div className="flex justify-center">
        <h1 className="text-5xl md:text-4xl sm:text-3xl text-white leading-tight font-serif mb-12"> Schedule </h1>
      </div>
      <div className="text-2xl md:text-xl sm:text-xl text-white mt-8 leading-relaxed">
        <span className="font-bold"> Date & Time:</span> <br/>
        <p className="text-lg"> March 29, 2025, 3PM </p> <br/>
        <div>
          <span className="font-bold"> Venue: </span> <br />
          <p className="italic"> Lovingston Winery <br /></p>
          <span className='text-lg'> 885 Freshwater Cove Ln, Lovingston, VA 22949 </span> <br/>
        </div>
      </div>
      <div className="text-2xl md:text-xl sm:text-xl text-white mt-8 leading-relaxed">
        <ul>
          <li> 
            <span className="font-bold"> Ceremony: </span> 3:00PM 
          </li><br />
          <li> 
            <span className="font-bold"> Cocktail Hour: </span> 4:00PM
          </li><br />
          <li> 
            <span className="font-bold"> Reception: </span> 5:00PM 
          </li><br />
        </ul>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2 py-8 px-10 grid grid-cols-4 gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
      <div className="col-span-4 sm:col-span-4 relative">
        <img className="rounded-md object-cover mx-auto" src="/alykq5.jpg" alt="fresh beets"/>
      </div>
    </div>
  </div>
</div>

      <Footer/>  
    </div>    
    </main>
  )
}
