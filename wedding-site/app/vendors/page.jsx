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
      <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-yellow-bg">
        <div className="max-w-6xl w-full mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20 space-y-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <h1 className="text-5xl md:text-4xl sm:text-3xl m-20 flex justify-center font-serif">Vendors</h1>
          <div className="space-y-12">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-center lg:space-x-10">
              <div className="w-full lg:w-1/2 p-10 prose mx-auto text-left" style={{ backgroundColor: '#996666' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="text-5xl md:text-4xl sm:text-3xl text-white italic leading-tight mt-4">Photos: Aly Hansen</h2>
                <br />
                <div className="text-1xl text-white leading-tight md:text-lg sm:text-md">
                  <p>Instagram: @alyhansenphoto</p>
                  <p>Website: www.alyhansenphoto.com</p>
                  <br />
                  <p>I came across Aly's work as she was about to move to Richmond from Birmingham, and I have been following her work on Instagram ever since.
                    Through a chance encounter, we became close friends and I am not only so happy that she will be there for my wedding, but I am also
                    so honored for her to be the photographer for our big day.</p>
                  <br />
                  <p>While I love digital photos and the effort put into posing for a flawless photo, there is something uniquely special to me with film photos and
                    their ability in capturing an authentic moment in my life.</p>
                  <br />
                  <p>When looking back on this day, I want the photos to be a slice of life, with everyone we love around us, being ourselves, natural and authentic, no extra fluff.
                    I want to be able to relive the moments as I look at these photos - and that to me, will be the perfect photos.</p>
                  <br />
                  <p>Aly's work has shown to capture exactly those special moments in her clients' lives, and I am so happy to have her at our wedding to do the same.</p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-10 prose mx-auto flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img src="aly2.jpg" alt="Photographer Aly Hansen" className="mx-auto"/>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-center lg:space-x-10">
              <div className="w-full lg:w-1/2 p-10 prose mx-auto text-left" style={{ backgroundColor: '#996666' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="text-5xl md:text-4xl sm:text-3xl text-white italic leading-tight mt-4">DJ: Rudy Lopez</h2>
                <br />
                <div className="text-1xl text-white leading-relaxed md:text-lg sm:text-md">
                  <p>I came across Aly's work as she was about to move to Richmond from Birmingham, and I have been following her work on Instagram ever since.
                    Through a chance encounter, we became close friends and I am not only so happy that she will be there for my wedding, but I am also
                    so honored for her to be the photographer for our big day.</p>
                  <br />
                  <p>While I love digital photos and the effort put into posing for a flawless photo, there is something uniquely special to me with film photos and
                    their ability in capturing an authentic moment in my life.</p>
                  <br />
                  <p>When looking back on this day, I want the photos to be a slice of life, with everyone we love around us, being ourselves, natural and authentic, no extra fluff.
                    I want to be able to relive the moments as I look at these photos - and that to me, will be the perfect photos.</p>
                  <br />
                  <p>Aly's work has shown to capture exactly those special moments in her clients' lives, and I am so happy to have her at our wedding to do the same.</p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-10 prose mx-auto flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img src="aly2.jpg" alt="DJ Rudy Lopez" className="mx-auto" />
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-center lg:space-x-10">
              <div className="w-full lg:w-1/2 p-10 prose mx-auto text-left" style={{ backgroundColor: '#996666' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="text-5xl md:text-4xl sm:text-3xl text-white italic leading-tight mt-4">Coffee: Trio Coffee Bar</h2>
                <br />
                <div className="text-1xl text-white leading-relaxed md:text-lg sm:text-md">
                  <p>I came across Aly's work as she was about to move to Richmond from Birmingham, and I have been following her work on Instagram ever since.
                    Through a chance encounter, we became close friends and I am not only so happy that she will be there for my wedding, but I am also
                    so honored for her to be the photographer for our big day.</p>
                  <br />
                  <p>While I love digital photos and the effort put into posing for a flawless photo, there is something uniquely special to me with film photos and
                    their ability in capturing an authentic moment in my life.</p>
                  <br />
                  <p>When looking back on this day, I want the photos to be a slice of life, with everyone we love around us, being ourselves, natural and authentic, no extra fluff.
                    I want to be able to relive the moments as I look at these photos - and that to me, will be the perfect photos.</p>
                  <br />
                  <p>Aly's work has shown to capture exactly those special moments in her clients' lives, and I am so happy to have her at our wedding to do the same.</p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-10 prose mx-auto flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img src="aly2.jpg" alt="Coffee Trio Coffee Bar" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}