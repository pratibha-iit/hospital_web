import { Space } from 'antd';
import React from 'react';

const Pricing = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Subscription <span className="text-outline">Plans</span></h2>
        
        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
          
          {/* Plus Plan */}
          <div className="bg-green-900 text-white rounded-lg p-6 w-72 shadow-lg">
            <h3 className="text-2xl font-semibold">VAIDYAA Plus</h3>
            <p className="text-4xl font-bold mt-4">₹199<span className="text-lg font-medium">/month</span></p>
            <button className="mt-6 bg-white text-green-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-100">Get Started</button>
            <ul className="mt-6 space-y-3 text-left text-white">
              <li>✔ Essential Healthcare</li>
              <li>✔ Unlimited Doctor Consultations</li>
              <li>✔ Discounts on Diagnostic Tests</li>
              <li>✔ Medicine Coupons</li>
              <li>✔ Find Nearby Doctors Easily</li>
            </ul>
          </div>
          
          {/* Pro Plan (Most Popular) */}
          <div className="bg-indigo-900 text-white rounded-lg p-6 w-72 shadow-lg relative">
            <h3 className="text-2xl font-semibold">VAIDYAA Pro</h3>
            <p className="text-4xl font-bold mt-4">₹249<span className="text-lg font-medium">/month</span></p>
            <div className="absolute top-4 right-4 bg-yellow-500 text-black font-semibold py-1 ppx-3 text-xs rounded-full">MOST POPULAR<br/></div> 
            <button className="mt-6 bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-600">Get Started</button>
            <ul className="mt-6 space-y-3 text-left text-white">
              <li>✔ Enhanced Care + Protection</li>
              <li>✔ All PLUS Benefits Included</li>
              <li>✔ Health Insurance Coverage</li>
              <li>✔ Expert Diet & Yoga Advice</li>
              <li>✔ Free Annual Full-Body Check-up</li>
            </ul>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-yellow-900 text-white rounded-lg p-6 w-72 shadow-lg">
            <h3 className="text-2xl font-semibold">VAIDYAA Premium</h3>
            <p className="text-4xl font-bold mt-4">₹799<span className="text-lg font-medium">/month</span></p>
            <button className="mt-6 bg-white text-yellow-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-100">Get Started</button>
            <ul className="mt-6 space-y-3 text-left text-white">
              <li>✔ Elite Healthcare</li>
              <li>✔ Concierge Doctor Access</li>
              <li>✔ Exclusive Benefits</li>
              <li>✔ VIP Support & Priority Service</li>
              <Space>    </Space>
            
              
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
