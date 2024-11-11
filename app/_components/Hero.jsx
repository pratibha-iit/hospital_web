"use client";  // Add this line at the top

import React, { useState } from 'react';
import BookingForm from './BookingForm';


function Hero() {
    const [isBooking, setIsBooking] = useState(false);

    const handleBookNowClick = () => {
        setIsBooking(true);
    };

    return (
        <section
            className="relative py-12"
            style={{ background: 'linear-gradient(130deg, #0D1017, #3BE374)', borderRadius: '0 0 0 50px' }}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16 items-center">
                    
                    {/* Text and Button */}
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold sm:text-5xl text-white">
                            Innovating Healthcare,<br /> Simplifying Solutions
                        </h2>
                        <button
                            onClick={handleBookNowClick}
                            className="mt-8 inline-block rounded-full bg-green-600 px-8 py-3 text-lg font-medium text-white transition hover:bg-green-700"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Doctor Image */}
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-none lg:h-full lg:col-span-1">
                        <div className="h-full w-full rounded-lg flex justify-center items-center">
                            <img
                                alt="Doctor"
                                src="/doctor.jpg"
                                width={800}
                                className="h-80 w-64 object-cover"
                            />
                        </div>
                    </div>

                    {/* Chart/List with Light Green Dots */}
                    <div className="lg:col-span-1 space-y-8">
                        <ul className="space-y-4 text-lg text-white">
                            <li className="flex items-center">
                                <span className="h-4 w-4 rounded-full bg-green-400 mr-3"></span>
                                Schedule Appointments
                            </li>
                            <li className="flex items-center">
                                <span className="h-4 w-4 rounded-full bg-green-400 mr-3"></span>
                                Buy Medicines
                            </li>
                            <li className="flex items-center">
                                <span className="h-4 w-4 rounded-full bg-green-400 mr-3"></span>
                                Get Insurance
                            </li>
                            <li className="flex items-center">
                                <span className="h-4 w-4 rounded-full bg-green-400 mr-3"></span>
                                V-Fit Club
                            </li>
                        </ul>
                        <p className="text-2xl font-bold text-white">12M+ Active Users</p>
                    </div>
                </div>

                {/* Booking Form */}
                {isBooking && <BookingForm />}
            </div>
        </section>
    );
}

// Add this CSS directly in your React component or as an external stylesheet.



// function Hero() {
//     const [isBooking, setIsBooking] = useState(false);
    
//     const handleBookNowClick = () => {
//         setIsBooking(true);
//     };

//     return (
//         <section className="relative py-12 pb-0">
//             <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-60"
//                 style={{ 
//                     backgroundImage: 'url(/doctor.jpg)',
//                     filter: 'blur(5px)', // Blur effect for the background
//                 }} 
//             />
//             <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-16">
//                 <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16 items-center">
                    
//                     {/* Text and Button */}
//                     <div className="lg:col-span-1 space-y-6">
//                         <h2 className="text-4xl font-bold sm:text-5xl text-white leading-tight transition-transform duration-300 transform hover:scale-105">
//                             Innovating Healthcare,<br /> Simplifying Solutions
//                         </h2>
//                         <button
//                             onClick={handleBookNowClick}
//                             className="mt-8 inline-block rounded-full bg-green-600 px-10 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-green-700 hover:shadow-xl"
//                         >
//                             Book Now
//                         </button>
//                     </div>

//                     {/* Doctor Image with Overlay */}
//                     <div className="relative h-64 overflow-hidden sm:h-80 lg:order-none lg:h-full lg:col-span-1 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
//                         <div className="h-full w-full flex justify-center items-center">
//                             <img
//                                 alt="Doctor"
//                                 src="/doctor.jpg"
//                                 width={800}
//                                 className="h-full w-full object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
//                             />
//                         </div>
//                     </div>

//                     {/* Chart/List with Light Green Dots */}
//                     <div className="lg:col-span-1 space-y-8">
//                         <ul className="space-y-4 text-lg text-white">
//                             <li className="flex items-center transition-colors duration-300 hover:text-green-400">
//                                 <span className="h-4 w-4 rounded-full bg-green-400 mr-3 shadow-md"></span>
//                                 Schedule Appointments
//                             </li>
//                             <li className="flex items-center transition-colors duration-300 hover:text-green-400">
//                                 <span className="h-4 w-4 rounded-full bg-green-400 mr-3 shadow-md"></span>
//                                 Buy Medicines
//                             </li>
//                             <li className="flex items-center transition-colors duration-300 hover:text-green-400">
//                                 <span className="h-4 w-4 rounded-full bg-green-400 mr-3 shadow-md"></span>
//                                 Get Insurance
//                             </li>
//                             <li className="flex items-center transition-colors duration-300 hover:text-green-400">
//                                 <span className="h-4 w-4 rounded-full bg-green-400 mr-3 shadow-md"></span>
//                                 V-Fit Club
//                             </li>
//                         </ul>
//                         <p className="text-2xl font-extrabold text-white">12M+ Active Users</p>
//                     </div>
//                 </div>

//                 {/* Booking Form */}
//                 {isBooking && <BookingForm />}
//             </div>
//         </section>
//     );
// }

export default Hero;
