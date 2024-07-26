"use client"
import Header from '../components/header';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Breadcrumb from '../components/breadcrumbs';
import Footer from '../components/footer';

export default function Vendors() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main>
      <Header />
      <div className="min-h-screen bg-cover bg-fixed bg-yellow-bg">
      <div className='flex justify-center py-6'>
          <Breadcrumb links={[{ href: '/vendors', text: 'Vendors' }]} />
      </div>
        <div className="max-w-6xl w-full mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20 space-y-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <h1 className="text-5xl md:text-4xl sm:text-3xl m-20 flex justify-center text-white font-serif">Vendors</h1>
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
                  <br/>
                  <p>While I love digital photos and the effort put into posing for a flawless photo, there is something uniquely special to me with film photos and
                    their ability in capturing an authentic moment in my life.</p>
                  <br />
                  <p>When looking back on this day, I want the photos to be a slice of life, with everyone we love around us, being ourselves, natural and authentic, no extra fluff.
                    I want to be able to relive the moments as I look at these photos - and that to me, will be the perfect photos.</p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-10 prose mx-auto flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img src="aly3.jpg" alt="Photographer Aly Hansen" className="mx-auto"/>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-center lg:space-x-10">
              <div className="w-full lg:w-1/2 p-10 prose mx-auto text-left" style={{ backgroundColor: '#996666' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="text-5xl md:text-4xl sm:text-3xl text-white italic leading-tight mt-4">DJ: Rudy Lopez</h2>
                <br />
                <div className="text-1xl text-white leading-relaxed md:text-lg sm:text-md">
                  <p>Instagram:@djrudyhlopez</p>
                  <p>Website: www.rudyhlopez.com/music</p>
                  <br />
                  <p>Rudy Lopez, famously known as DJ Rudeboi, is a seasoned open-format DJ with over two decades of experience rocking clubs and events. Rudy has an innate talent for keeping the crowd energized, seamlessly blending dance floor sing-alongs with timeless party anthems. 
                    We connected with Rudy through a mutual friend, knowing how crucial a great DJ is for setting the perfect party vibe. Our initial Zoom meeting with him was relaxed and enjoyable. Rudy's expertise, friendliness, and willingness to assist with any questions made the planning process a breeze.
                    We are thrilled to have Rudy at our wedding, ready to ignite the dance floor and create unforgettable memories for everyone! We can't wait for everyone to dance the night away with us! </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-10 prose mx-auto flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img src="rudy.jpg" alt="DJ Rudy Lopez" className="mx-auto" />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center lg:space-x-10">
              <div className="w-full lg:w-1/2 p-10 prose mx-auto text-left" style={{ backgroundColor: '#996666' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="text-5xl md:text-4xl sm:text-3xl text-white italic leading-tight mt-4">Coffee: Trio Coffee Bar</h2>
                <br />
                <div className="text-1xl text-white leading-relaxed md:text-lg sm:text-md">
                  <p>Instagram:@trio.coffeebar</p>
                  <br/>
                  <p> Since we met over coffee and neither of us drink alcohol, it was essential to have something that truly represented us. 
                    We discovered Dillon through a recommendation from one of our favorite local coffee shops, Paix. 
                    After meeting Dillon, sampling his delicious drinks, and getting to know him, we knew TRIO was the perfect fit for our special day.
                    Unlike other mobile coffee carts, TRIO meticulously selects high-quality coffee beans, ensuring an exceptional experience. 
                    Lovingly curated by Dillon Mancuso in Williamsburg, VA, you can find TRIO at private events as well as cozy pop-ups.
                    We are excited to have Dillon provide a little pick-me-up for us and our guests during the reception. </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-10 prose mx-auto flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img src="dillon.jpg" alt="Coffee Trio Coffee Bar" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <Footer/>  
      </div>
    </main>
  );
}