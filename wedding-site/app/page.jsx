"use client"
import Header from "./components/header";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Countdown from "./components/countdown";

export default function ModernBeets() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main>
          <Header/>
    <div className="min-h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzMwMCcgdmlld0JveD0nMCAwIDIwMCAzMDAnPgoJPGZpbHRlciBpZD0nZnV6eicgeD0nMCcgeT0nMCc+CgkJPGZlVHVyYnVsZW5jZSB0eXBlPSd0dXJidWxlbmNlJyBiYXNlRnJlcXVlbmN5PScwLjMnIG51bU9jdGF2ZXM9JzEwJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+Cgk8L2ZpbHRlcj4KCTxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbHRlcj0ndXJsKCNmdXp6KScgb3BhY2l0eT0nMC4xNScvPgo8L3N2Zz4=)` }}>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20">
      <div className="md:py-20 flex justify-center sm:px-6 sm:py-22 md:px-12 md:py-20 md:mb-12 sm:mb-20">
        <Countdown />
      </div>
        <div className="md:py-20 flex justify-center">
          <h1 className="text-7xl text-white leading-tight"> Quynh and Kevin </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 p-10 prose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="text-2xl text-white font-light mt-8 leading-relaxed">
              <p>
                Date & Time: March 29, 2025, 3PM <br/>
                Venue: Lovingston Winery, Lovingston, VA <br/>
                Countdown Clock <br/>
                Attire: Cocktail Attire <br/>
                Note: While we would love to have the little ones present, 
                we kindly request that no children will be present at the ceremony and reception due to space restriction, thank you. <br/>               
              </p>
            </div>
            <div className="text-2xl text-white font-light mt-8 leading-relaxed">
              <ul>
                    <li> Ceremony: 3:00PM </li>
                    <li> Reception: 4:30PM </li>
                    <li> After Party: 8:30PM </li>
                  </ul>
            </div>

          </div>
          <div className="w-full lg:w-2/3 py-8 px-10 grid grid-cols-4 gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="h-64 col-span-4 sm:col-span-4 relative">
              <img className="rounded-md absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1573426667638-18ccdd988a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="fresh beets" />
            </div>
            <div className="h-64 col-span-4 sm:col-span-2 relative">
              <img className="rounded-lg absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1592201426550-83c4be24a0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="red veggies" />
            </div>
            <div className="h-64 col-span-4 sm:col-span-2 relative">
              <img className="rounded-sm absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="asperagas" />
            </div>
            <div className="h-64 col-span-4 sm:col-span-3 relative">
              <img className="rounded-md absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="carrots" />
            </div>
            <div className="h-64 col-span-4 sm:col-span-1 relative">
              <img className="rounded-md absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="tomato tomato" />
            </div>
          </div>
        </div>
      </div>
    </div>    
    </main>
  )
}

