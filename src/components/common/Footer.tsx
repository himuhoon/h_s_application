'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-global-1 pt-[8px] sm:pt-[12px] md:pt-[16px] pr-[28px] sm:pr-[42px] md:pr-[56px] pb-[8px] sm:pb-[12px] md:pb-[16px] pl-[139px] sm:pl-[208px] md:pl-[278px] mt-[15px] sm:mt-[22px] md:mt-[30px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[9px] sm:gap-[13px] md:gap-[18px] justify-center items-start w-full">
          {/* Social Media Icons */}
          <div className="flex flex-row gap-[10px] sm:gap-[15px] md:gap-[20px] justify-start items-center w-auto">
            <Image 
              src="/images/img_vector_gray_600.svg" 
              alt="Facebook" 
              width={24} 
              height={24}
              className="w-[18px] sm:w-[21px] md:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] cursor-pointer"
            />
            <Image 
              src="/images/img_vector_gray_600_24x24.svg" 
              alt="Instagram" 
              width={24} 
              height={24}
              className="w-[18px] sm:w-[21px] md:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] cursor-pointer"
            />
            <Image 
              src="/images/img_twitter.svg" 
              alt="Twitter" 
              width={24} 
              height={24}
              className="w-[18px] sm:w-[21px] md:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] cursor-pointer"
            />
            <Image 
              src="/images/img_youtube.svg" 
              alt="YouTube" 
              width={24} 
              height={24}
              className="w-[18px] sm:w-[21px] md:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] cursor-pointer"
            />
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-[80%] gap-6 md:gap-0">
            {/* Column 1 */}
            <div className="flex flex-col gap-[7px] sm:gap-[10px] md:gap-[14px] justify-start items-start w-auto">
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Seslendirme ve Alt Yazı
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Medya Merkezi
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Gizlilik
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Bize Ulaşın
              </span>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[7px] sm:gap-[10px] md:gap-[14px] justify-start items-start w-auto">
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Sesli Betimleme
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Yatırımcı İlişkileri
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Yasal Hükümler
              </span>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[7px] sm:gap-[10px] md:gap-[14px] justify-start items-start w-auto">
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Yardım Merkezi
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                İş İmkanları
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Çerez Tercihleri
              </span>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-[7px] sm:gap-[10px] md:gap-[14px] justify-start items-start w-auto">
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Hediye Kartları
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Kullanım Koşulları
              </span>
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3">
                Kurumsal Bilgiler
              </span>
            </div>
          </div>

          {/* Service Code Button */}
          <Button
            variant="outline"
            size="sm"
            className="text-[11px] sm:text-[12px] md:text-[13px] font-netflix font-[400] leading-[13px] sm:leading-[15px] md:leading-[17px] text-left text-global-3 border-[1px] border-solid border-global-3 pt-[5px] sm:pt-[7px] md:pt-[10px] pr-[7px] sm:pr-[10px] md:pr-[14px] pb-[5px] sm:pb-[7px] md:pb-[10px] pl-[7px] sm:pl-[10px] md:pl-[14px]"
          >
            Hizmet Kodu
          </Button>

          {/* Copyright */}
          <span className="text-[9px] sm:text-[10px] md:text-[11px] font-netflix font-[300] leading-[12px] sm:leading-[13px] md:leading-[15px] text-left text-global-3">
            © 1997-2021 Netflix, Inc.  {'{i-062d573a0ee099242}'}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;