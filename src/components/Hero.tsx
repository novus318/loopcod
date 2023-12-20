import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useEffect(() => {
    gsap.from('.animate-text', { y: -100, duration: 1, stagger: 0.1, scrollTrigger: { trigger: '.hero-title', start: 'top 80%' } });
    gsap.from('.animate-textb', { y: 100, duration: 1, stagger: 0.1, scrollTrigger: { trigger: '.hero-title', start: 'top 80%' } });

    gsap.from('.your', { opacity: 1, x: -100, duration: 1, stagger: 0.2, scrollTrigger: { trigger: '.hero-title', start: 'top 80%' } });
    
    gsap.from('.digital', { opacity: 0, y: 50, duration: 1, stagger: 0.2, scrollTrigger: { trigger: '.hero-title', start: 'top 80%' } });
    gsap.from('.exp', {
        opacity: 1,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: { trigger: '.hero-title', start: 'top 80%' },
    });
    const hoverElements = document.querySelectorAll('.hover-animation');
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.1, color: '#ff7c00', duration: 0.3 });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, color: '#000000', duration: 0.3 });
      });
    });
    return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill(true);
        });
      };
  }, []);

  return (
  <>
    <div className="overflow-hidden flex items-center justify-center text-black mt-10">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold mb-4 hero-title animate-text hover-animation">
          TRANSFORM
        </h1>
        <div className="text-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 hero-title your">
            your
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold mb-4 hero-title animate-textb hover-animation">
            VISION
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 hero-title digital">
            to digital reality
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 exp">
            Crafting Digital Experiences That Inspire
          </p>
        </div>
      </div>
    </div></>
  );
};

export default Hero;
