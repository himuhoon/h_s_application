'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-global-1 pt-[12px] sm:pt-[18px] md:pt-[24px] pr-[30px] sm:pr-[45px] md:pr-[60px] pb-[12px] sm:pb-[18px] md:pb-[24px] pl-[30px] sm:pl-[45px] md:pl-[60px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center w-full">
          {/* Left Section - Logo and Navigation */}
          <div className="flex flex-row justify-between items-center w-full md:w-[40%]">
            {/* Logo */}
            <div className="w-[55px] sm:w-[82px] md:w-[110px]">
              <Image 
                src="/images/img_vector.svg" 
                alt="Netflix Logo" 
                width={110} 
                height={30}
                className="w-full h-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-row gap-[10px] md:gap-[20px] justify-center items-center w-auto">
              <span className="text-[12px] md:text-[14px] font-netflix font-[900] leading-[15px] md:leading-[18px] text-left text-global-2">
                Ana Sayfa
              </span>
              <span className="text-[12px] md:text-[14px] font-netflix font-[500] leading-[15px] md:leading-[18px] text-left text-global-1">
                Diziler
              </span>
              <span className="text-[12px] md:text-[14px] font-netflix font-[500] leading-[15px] md:leading-[18px] text-left text-global-1">
                Filmler
              </span>
              <span className="text-[12px] md:text-[14px] font-netflix font-[500] leading-[15px] md:leading-[18px] text-left text-global-1">
                Yeni ve Popüler
              </span>
              <span className="text-[12px] md:text-[14px] font-netflix font-[500] leading-[15px] md:leading-[18px] text-left text-global-1">
                Listem
              </span>
            </div>
          </div>

          {/* Right Section - User Actions */}
          <div className="hidden md:flex flex-row gap-[10px] md:gap-[20px] justify-center items-center w-auto">
            <Image 
              src="/images/img_search.svg" 
              alt="Search" 
              width={20} 
              height={20}
              className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px] cursor-pointer"
            />
            <span className="text-[12px] md:text-[14px] font-netflix font-[500] leading-[15px] md:leading-[18px] text-left text-global-2">
              ÇOCUK
            </span>
            <Image 
              src="/images/img_giftbox.svg" 
              alt="Gift" 
              width={20} 
              height={20}
              className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px] cursor-pointer"
            />
            <Image 
              src="/images/img_notificationbell.svg" 
              alt="Notifications" 
              width={20} 
              height={20}
              className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px] cursor-pointer"
            />
            <div className="flex flex-row gap-[5px] md:gap-[10px] justify-center items-center w-auto">
              <Image 
                src="/images/img_profileimg.png" 
                alt="Profile" 
                width={32} 
                height={32}
                className="w-[24px] sm:w-[28px] md:w-[32px] h-[24px] sm:h-[28px] md:h-[32px] cursor-pointer rounded"
              />
              <Image 
                src="/images/img_icon_down.svg" 
                alt="Dropdown" 
                width={14} 
                height={14}
                className="w-[12px] sm:w-[13px] md:w-[14px] h-[12px] sm:h-[13px] md:h-[14px] cursor-pointer"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-global-2 mb-1"></span>
              <span className="block w-5 h-0.5 bg-global-2 mb-1"></span>
              <span className="block w-5 h-0.5 bg-global-2"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} md:hidden mt-4 pt-4 border-t border-global-3`}>
          <div className="flex flex-col gap-4">
            <span className="text-[14px] font-netflix font-[900] leading-[18px] text-left text-global-2">
              Ana Sayfa
            </span>
            <span className="text-[14px] font-netflix font-[500] leading-[18px] text-left text-global-1">
              Diziler
            </span>
            <span className="text-[14px] font-netflix font-[500] leading-[18px] text-left text-global-1">
              Filmler
            </span>
            <span className="text-[14px] font-netflix font-[500] leading-[18px] text-left text-global-1">
              Yeni ve Popüler
            </span>
            <span className="text-[14px] font-netflix font-[500] leading-[18px] text-left text-global-1">
              Listem
            </span>
            <div className="flex flex-row gap-4 items-center pt-2">
              <Image 
                src="/images/img_search.svg" 
                alt="Search" 
                width={20} 
                height={20}
                className="w-[20px] h-[20px] cursor-pointer"
              />
              <span className="text-[14px] font-netflix font-[500] leading-[18px] text-left text-global-2">
                ÇOCUK
              </span>
              <Image 
                src="/images/img_profileimg.png" 
                alt="Profile" 
                width={32} 
                height={32}
                className="w-[32px] h-[32px] cursor-pointer rounded"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;