"use client";

import Header from "../components/header";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function TravelPage() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <main>
            <Header />
            <div className="min-h-screen bg-cover bg-fixed bg-yellow-bg">
                <div className="max-w-6xl w-full mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-20 space-y-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h1 className="text-5xl md:text-4xl sm:text-3xl mt-20 flex justify-center font-serif"> Travel & Lodging </h1>
            <div className="flex flex-col lg:space-x-8">
            <div
                className="w-full p-4 sm:p-6 md:p-8 lg:p-10 prose"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
            >
                <div className="text-xl text-white font-light leading-relaxed">
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto border-collapse border border-gray-200 text-xs sm:text-sm md:text-base lg:text-lg">
                    <thead>
                        <tr className="bg-gray-700 text-white">
                        <th className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">Accommodation</th>
                        <th className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 text-white">
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://redhillbedandbreakfast.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            Red Hill Bed and Breakfast
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Lovingly restored historic home, located about 2 minutes from Lovingston Winery, incredible breakfasts cooked by Herbert, an ex-swiss chef
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://www.airbnb.com/rooms/49716421?source_impression_id=p3_1659715288_zWolQ%2FH1wFZhtp9h"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            Ms Maria’s Place
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Sleeps 6, great deal, located about 2 minutes from Lovingston Winery
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://www.airbnb.com/rooms/49369093?guests=1&adults=1&s=67&unique_share_id=38377c53-9ba8-430b-b758-973cd1f8b577"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            Freshwater Field Cabin
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Sleeps 8 for a low price, located minutes from the winery, nice mountain views with cows and horses on the property
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://www.airbnb.com/rooms/950575973276142565?source_impression_id=p3_1700487967_cAErNJwY9zBoNtYY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            Treetops Lodge
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Beautiful cabin with a kind owner who is familiar with the area and Lovingston Winery, can sleep 9 guests, arcade games, fire pit, large deck
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://www.sbc.edu/elston-inn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            The Elston Inn
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Positive feedback from past couples about their top-tier customer service, has over 30 rooms, easy option if using bus service, located at Sweet Briar College
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://www.airbnb.com/rooms/47859254?source_impression_id=p3_1659915588_qteCuDqhiwkSKvJg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            Mountain View Mini Farm
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Located on route 151 (a hub for wineries, breweries, distilleries, and restaurants), great mountain views and mini horses, owned and operated by our family
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://book.virginiastr.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            Farmhouse with heated pool
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Less than 10 minutes away, sleeps 14, use code LOVINGSTON for 10% off and book directly to avoid Airbnb fees, pet friendly
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="mailto:innkeepers@harmony-hill.com"
                            className="text-blue-400 underline"
                            >
                            Harmony Hill Bed and Breakfast
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Cozy cabin feel with multiple bedrooms, inquire about their future plans
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://www.airbnb.com/rooms/623783448242146621?source_impression_id=p3_1660941181_pTbZEH70FVZKPhX6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            Mima’s Mountain House
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            Sleeps up to 10, great price
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            <a
                            href="https://www.airbnb.com/rooms/929840423544360561?guests=1&adults=1&s=67&unique_share_id=c29fc6f5-1b06-4b19-a5af-23629dbe2a9a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            Mountain Haven Cottage
                            </a>
                        </td>
                        <td className="border border-gray-200 px-2 py-1 sm:px-4 sm:py-2">
                            New build with amazing mountain views, mention “MountainVino” for a 10% discount, concierge recommendations for shuttle service to and from Lovingston
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </main>
    );
}
