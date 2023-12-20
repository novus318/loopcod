import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" z-50 fixed bottom-4 right-4 hover:bg-black text-white text-lg rounded-full p-2 md:p-3 shadow-md bg-[#ff7c00] transition-transform transform hover:scale-110 focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
      
    </div>
  );
};

export default ScrollToTop;
