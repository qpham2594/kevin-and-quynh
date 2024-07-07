"use client"
import Header from '../components/header';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function WeddingParty() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main>
      <Header/>
      <div className="bg-sky-bg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
      <section id="our-team" className="py-32">
          <div className="container mx-auto px-10">
            <h2 className="text-6xl md:text-6xl sm:text-5xl text-white leading-tight font-serif font-bold text-center mb-2">The Wedding Party</h2>
            <div className="flex space-x-0 m-1">
              <img src="/newborder.png" className="small-image" />
              <img src="/newborder2.png" className="small-image" />
            </div>

            <p className="italic text-center text-3xl m-8"> "A good friend is a connection to life — a tie to the past, a road to the future, the key to sanity in a totally insane world." - Lois Wyse </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                  <img src={member.image} alt={`Team Member ${index + 1}`} className="w-full rounded-full mb-4"/>
                  <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
                  <p className="text-gray-700">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const teamMembers = [
  {
    image: "/evan.JPG",
    name: "Evan Bollinger",
    role: "Best Man"
  },
  {
    image: "/tate.jpg",
    name: "Tate Houff",
    role: "Groomsman"
  },
  {
    image: "/markham.jpg",
    name: "Chris Markham",
    role: "Groomsman"
  },
  {
    image: "/sandy1.jpg",
    name: "Chris Sandoval",
    role: "Groomsman"
  },
  {
    image: "/brandon.jpg",
    name: "Brandon Abell",
    role: "Groomsman"
  },
  {
    image: "grant.jpg",
    name: "Grant Silvestri",
    role: "Groomsman"
  },
  {
    image: "/john1.jpg",
    name: "John Chittum",
    role: "Man of Honor"
  },
  {
    image: "/kat.jpg",
    name: "Kathleen McCarthy",
    role: "Bridesmaid"
  },
  {
    image: "/stacy1.jpg",
    name: "Stacy Miller",
    role: "Bridesmaid"
  },  
  {
    image: "/rebekah.jpeg",
    name: "Rebekah Lee",
    role: "Bridesmaid"
  },
  {
    image: "/jess.jpg",
    name: "Jessica Godinez",
    role: "Bridesmaid"
  },
  {
    image: "/lindsay.jpg",
    name: "Lindsay Schneider",
    role: "Bridesmaid"
  },
  {
    image: "sam-lauren.jpeg",
    name: "Sam and Lauren",
    role: "Flower-Gals"
  },
  {
    image: "/tom.jpg",
    name: "Tom Hudson",
    role: "Officiant"
  },
  {
    image: "/kirsten2.jpg",
    name: "Kirsten Fuller",
    role: "Ringbearer"
  },
];