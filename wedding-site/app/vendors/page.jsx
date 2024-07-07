"use client"
import Header from '../components/header';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Vendors() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-sky-bg">
        <div className="flex max-w-8xl w-full mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20">
          <div className="flex-1">
            <h1 className="text-7xl text-white leading-relaxed md:text-6xl sm:text-5xl font-serif">Vendors</h1>
            <div className="flex flex-col lg:flex-row mb-12">
              <div className="w-full lg:w-1/3 p-10 prose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="text-6xl text-white italic leading-relaxed md:text-4xl sm:text-3xl">Photographer: Aly Hansen</h2>
                <br />
                <p className="text-1xl text-white leading-relaxed md:text-lg sm:text-md">
                <p>Instagram: @alyhansenphoto</p>
                <p>Website: www.alyhansenphoto.com</p> <br/>
                  I came across Aly's work as she was about to move to Richmond from Birmingham, and I have been following her work on Instagram ever since.
                  Through a chance encounter, we became close friends and I am not only so happy that she will be there for my wedding, but I am also
                  so honored for her to be the photographer for our big day.
                  <br /><br />
                  While I love digital photos and the effort put into posing for a flawless photo, there is something uniquely special to me with film photos and
                  their ability in capturing an authentic moment in my life.
                  <br />
                  When looking back on this day, I want the photos to be a slice of life, with everyone we love around us, being ourselves, natural and authentic, no extra fluff.
                  I want to be able to relive the moments as I look at these photos - and that to me, will be the perfect photos.
                  <br /><br />
                  Aly's work have shown to captured exactly those special moments in her clients' lives, and I am so happy to have her at our wedding to do the same.
                </p>
                
              </div>
              <div className="w-full lg:w-2/3 p-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="col-span-4 sm:col-span-4 relative">
                  <img className="rounded-md h-full w-70 object-cover mt-4" src="/aly2.jpg" alt="Photographer Aly Hansen" />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-12">
              <div className="w-full lg:w-1/3 p-10 prose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="text-6xl text-white italic leading-relaxed md:text-4xl sm:text-3xl">DJ: Rudy Lopez</h2>
                <br />
                <p className="text-1xl text-white leading-relaxed md:text-lg sm:text-md">
                  I came across Aly's work as she was about to move to Richmond from Birmingham, and I have been following her work on Instagram ever since.
                  Through a chance encounter, we became close friends and I am not only so happy that she will be there for my wedding, but I am also
                  so honored for her to be the photographer for our big day.
                  <br /><br />
                  While I love digital photos and the effort put into posing for a flawless photo, there is something uniquely special to me with film photos and
                  their ability in capturing an authentic moment in my life.
                  <br />
                  When looking back on this day, I want the photos to be a slice of life, with everyone we love around us, being ourselves, natural and authentic, no extra fluff.
                  I want to be able to relive the moments as I look at these photos - and that to me, will be the perfect photos.
                  <br /><br />
                  Aly's work have shown to captured exactly those special moments in her clients' lives, and I am so happy to have her at our wedding to do the same.
                </p>
              </div>
              <div className="w-full lg:w-2/3 p-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="col-span-4 sm:col-span-4 relative">
                  <img className="rounded-md h-full w-90 object-cover mt-4" src="/aly2.jpg" alt="Photographer Aly Hansen" />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-12">
              <div className="w-full lg:w-1/3 p-10 prose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="text-6xl text-white italic leading-relaxed md:text-4xl sm:text-3xl">Coffee: Trio Coffee Bar</h2>
                <br />
                <p className="text-1xl text-white leading-relaxed md:text-lg sm:text-md">
                  I came across Aly's work as she was about to move to Richmond from Birmingham, and I have been following her work on Instagram ever since.
                  Through a chance encounter, we became close friends and I am not only so happy that she will be there for my wedding, but I am also
                  so honored for her to be the photographer for our big day.
                  <br /><br />
                  While I love digital photos and the effort put into posing for a flawless photo, there is something uniquely special to me with film photos and
                  their ability in capturing an authentic moment in my life.
                  <br />
                  When looking back on this day, I want the photos to be a slice of life, with everyone we love around us, being ourselves, natural and authentic, no extra fluff.
                  I want to be able to relive the moments as I look at these photos - and that to me, will be the perfect photos.
                  <br /><br />
                  Aly's work have shown to captured exactly those special moments in her clients' lives, and I am so happy to have her at our wedding to do the same.
                </p>
              </div>
              <div className="w-full lg:w-2/3 p-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="col-span-4 sm:col-span-4 relative">
                  <img className="rounded-md h-full w-70 object-cover mt-4" src="/aly2.jpg" alt="Photographer Aly Hansen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}