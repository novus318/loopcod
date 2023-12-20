import React from 'react';
import { RiTeamLine, RiCodeLine, RiLightbulbLine } from 'react-icons/ri';

const WhyLoopcod = () => {
  return (
    <div className="relative bg-black text-white p-8 shadow-lg">
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
    >
      <source src="/bg.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10">
      <h2 className="text-4xl font-extrabold mb-6 text-white">Why Choose Loopcod?</h2>
      <p className="text-lg mb-8 text-center text-white">Unlock the potential of your digital presence with Loopcod. Our team of seasoned developers, designers, and strategists is dedicated to delivering cutting-edge solutions tailored to your unique needs.</p>

      <h3 className="text-2xl font-bold mb-4 text-center text-white">What Sets Us Apart</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: <RiCodeLine className="text-[#ff7c00] text-4xl" />, title: 'Comprehensive Web Development', details: 'From front-end design to back-end functionality, we ensure a seamless user experience and optimal performance for your website.' },
          { icon: <RiLightbulbLine className="text-[#ff7c00] text-4xl" />, title: 'Creative Web Design', details: 'Our team of talented designers brings innovation  Through a collaborative approach, we blend creativity to ensure your website not only looks impressive but also engages visitors.' },
          { icon: <RiTeamLine className="text-[#ff7c00] text-4xl" />, title: 'Expert Team Collaboration', details: 'Benefit from a collaborative environment where diverse skills and expertise converge, ensuring efficient project management, timely delivery, and a shared vision for success.' },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              {item.icon}
              <h4 className="text-black text-left ml-4 text-2xl font-bold">{item.title}</h4>
            </div>
            <p className="text-black">{item.details}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="bg-[#ff7c00] text-white py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  </div>
  );
};

export default WhyLoopcod;
