'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
const NetflixHomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#141414]">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-center w-full">
        {/* Hero Section */}
        <div className="w-full mr-[90px] sm:mr-[135px] md:mr-[180px] ml-[57px] sm:ml-[85px] md:ml-[114px]">
          <div className="relative w-full max-w-[1440px] mx-auto h-[410px] sm:h-[615px] md:h-[820px]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/images/img_movieposter.png')" }}
            />
            {/* Hero Content */}
            <div className="relative z-10 pt-[100px] sm:pt-[150px] md:pt-[200px] pr-[28px] sm:pr-[42px] md:pr-[56px] pb-[100px] sm:pb-[150px] md:pb-[200px] pl-[28px] sm:pl-[42px] md:pl-[56px]">
              <div className="flex flex-row justify-start items-center w-full">
                <div className="flex flex-col justify-start items-start w-full mb-[9px] sm:mb-[13px] md:mb-[18px]">
                  {/* Movie Title Image */}
                  <Image 
                    src="/images/img_moviename.png" 
                    alt="Yanimda Kal" 
                    width={408} 
                    height={114}
                    className="w-[204px] sm:w-[306px] md:w-[408px] h-[57px] sm:h-[85px] md:h-[114px]"
                  />
                  {/* Top 10 Badge and Title */}
                  <div className="flex flex-row justify-start items-start w-full mt-[7px] sm:mt-[10px] md:mt-[14px]">
                    <Image 
                      src="/images/img_top10badge.svg" 
                      alt="Top 10" 
                      width={32} 
                      height={32}
                      className="w-[16px] sm:w-[24px] md:w-[32px] h-[16px] sm:h-[24px] md:h-[32px]"
                    />
                    <h1 className="text-[15px] sm:text-[22px] md:text-[30px] font-netflix font-[500] leading-[19px] sm:leading-[29px] md:leading-[39px] text-left text-[#ffffff] self-center ml-[7px] sm:ml-[10px] md:ml-[14px]">
                      Türkiye&apos;de Bugün 4 Numara
                    </h1>
                  </div>
                  {/* Description */}
                  <p className="text-[13px] sm:text-[19px] md:text-[26px] font-netflix font-[400] leading-[16px] sm:leading-[24px] md:leading-[33px] text-left text-[#ffffff] w-full sm:w-[60%] md:w-[48%] mt-[4px] sm:mt-[6px] md:mt-[8px]">
                    Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı değişir.
                  </p>
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-start items-center w-full gap-[7px] sm:gap-[10px] md:gap-[14px] mt-[7px] sm:mt-[10px] md:mt-[14px]">
                    <Button
                      variant="primary"
                      size="lg"
                      leftImage={{
                        src: "/images/img_play.svg",
                        width: 32,
                        height: 32
                      }}
                      className="text-[11px] sm:text-[16px] md:text-[22px] font-netflix font-[500] leading-[14px] sm:leading-[21px] md:leading-[29px] text-left text-[#141414] bg-[#ffffff] rounded-[2px] sm:rounded-[3px] md:rounded-[4px] pt-[6px] sm:pt-[9px] md:pt-[12px] pr-[15px] sm:pr-[22px] md:pr-[30px] pb-[6px] sm:pb-[9px] md:pb-[12px] pl-[41px] sm:pl-[61px] md:pl-[82px] w-full sm:w-auto"
                    >
                      Oynat
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      leftImage={{
                        src: "/images/img_detail.svg",
                        width: 32,
                        height: 32
                      }}
                      className="text-[11px] sm:text-[16px] md:text-[22px] font-netflix font-[500] leading-[14px] sm:leading-[21px] md:leading-[29px] text-left text-[#ffffff] bg-[#ffffff4c] rounded-[2px] sm:rounded-[3px] md:rounded-[4px] pt-[6px] sm:pt-[9px] md:pt-[12px] pr-[15px] sm:pr-[22px] md:pr-[30px] pb-[6px] sm:pb-[9px] md:pb-[12px] pl-[41px] sm:pl-[61px] md:pl-[82px] ml-0 sm:ml-[7px] md:ml-[14px] w-full sm:w-auto"
                    >
                      Daha Fazla Bilgi
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Netflix'te Popüler Section */}
        <div className="flex flex-col justify-start items-start w-full ml-[30px] sm:ml-[45px] md:ml-[60px]">
          <h2 className="text-[13px] sm:text-[19px] md:text-[26px] font-netflix font-[500] leading-[17px] sm:leading-[25px] md:leading-[34px] text-left text-[#e5e5e5]">
            Netflix&apos;te Popüler
          </h2>
          <div className="flex flex-row gap-[2px] sm:gap-[3px] md:gap-[4px] justify-start items-center w-full overflow-x-auto mt-[3px] sm:mt-[4px] md:mt-[6px]">
            <div className="flex flex-row justify-start items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_160x284.png" 
                alt="Movie Poster" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_1.png" 
                alt="Movie Poster" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_2.png" 
                alt="Movie Poster" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_3.png" 
                alt="Movie Poster" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start w-[16%] flex-shrink-0">
              <div className="flex flex-row justify-start items-center w-full overflow-x-auto mb-[5px] sm:mb-[7px] md:mb-[10px]">
                <div className="relative w-full h-[80px] sm:h-[120px] md:h-[160px] flex justify-center items-center">
                  <Image 
                    src="/images/img_movieposter_4.png" 
                    alt="Movie Poster" 
                    width={284} 
                    height={160}
                    className="w-full h-full rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"
                  />
                  <div className="absolute inset-0 bg-[#1414147f] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] flex justify-end items-end pt-[29px] sm:pt-[43px] md:pt-[58px] pr-[45px] sm:pr-[67px] md:pr-[90px] pb-[29px] sm:pb-[43px] md:pb-[58px] pl-[28px] sm:pl-[42px] md:pl-[56px]">
                    <Image 
                      src="/images/img_arrowleft.svg" 
                      alt="Arrow" 
                      width={32} 
                      height={32}
                      className="w-[16px] sm:w-[24px] md:w-[32px] h-[16px] sm:h-[24px] md:h-[32px] mt-[6px] sm:mt-[9px] md:mt-[12px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Kemal, İzlemeye Devam Et Section */}
        <div className="flex flex-col justify-start items-start w-full mr-[85px] sm:mr-[127px] md:mr-[170px] ml-[87px] sm:ml-[130px] md:ml-[174px]">
          <h2 className="text-[13px] sm:text-[19px] md:text-[26px] font-netflix font-[500] leading-[17px] sm:leading-[25px] md:leading-[34px] text-left text-[#e5e5e5]">
            Kemal, İzlemeye Devam Et
          </h2>
          <div className="flex flex-row justify-start items-center w-full mt-[3px] sm:mt-[4px] md:mt-[6px] overflow-x-auto">
            <div className="flex flex-row gap-[2px] sm:gap-[3px] md:gap-[4px] w-full">
              {/* Continue Watching Items */}
              {[
                "/images/img_movieposter_5.png",
                "/images/img_movieposter_6.png", 
                "/images/img_movieposter_7.png",
                "/images/img_movieposter_8.png"
              ].map((src, index) => (
                <div key={index} className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center w-[142px] sm:w-[213px] md:w-[284px] flex-shrink-0">
                  <Image 
                    src={src} 
                    alt="Continue Watching" 
                    width={284} 
                    height={160}
                    className="w-full h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"
                  />
                  <div className="flex flex-col justify-start items-start w-full mr-[27px] sm:mr-[40px] md:mr-[54px] ml-[27px] sm:ml-[40px] md:ml-[54px]">
                    <div className="w-full h-[1.5px] sm:h-[2px] md:h-[3px] bg-[#6d6d6eb2]" />
                    <div className="w-[10%] h-[1.5px] sm:h-[2px] md:h-[3px] bg-[#b9090b] -mt-[1px] sm:-mt-[1.5px] md:-mt-[2px]" />
                  </div>
                </div>
              ))}
              {/* Last Item with Arrow */}
              <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-start w-[16%] flex-shrink-0">
                <div className="flex flex-row justify-start items-center w-full overflow-x-auto ml-[2px] sm:ml-[3px] md:ml-[4px]">
                  <div className="relative w-full h-[80px] sm:h-[120px] md:h-[160px] flex justify-center items-center">
                    <Image 
                      src="/images/img_movieposter_9.png" 
                      alt="Continue Watching" 
                      width={284} 
                      height={160}
                      className="w-full h-full rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"
                    />
                    <div className="absolute inset-0 bg-[#1414147f] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] flex justify-end items-start pt-[30px] sm:pt-[45px] md:pt-[60px] pr-[42px] sm:pr-[63px] md:pr-[84px] pb-[30px] sm:pb-[45px] md:pb-[60px] pl-[28px] sm:pl-[42px] md:pl-[56px]">
                      <Image 
                        src="/images/img_arrowleft.svg" 
                        alt="Arrow" 
                        width={32} 
                        height={32}
                        className="w-[16px] sm:w-[24px] md:w-[32px] h-[16px] sm:h-[24px] md:h-[32px] mb-[3px] sm:mb-[4px] md:mb-[6px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start self-end w-[74%]">
                  <div className="w-full h-[1.5px] sm:h-[2px] md:h-[3px] bg-[#6d6d6eb2]" />
                  <div className="w-[10%] h-[1.5px] sm:h-[2px] md:h-[3px] bg-[#b9090b] -mt-[1px] sm:-mt-[1.5px] md:-mt-[2px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gündemdekiler Section */}
        <div className="flex flex-col justify-start items-start w-full ml-[30px] sm:ml-[45px] md:ml-[60px] mt-[13px] sm:mt-[19px] md:mt-[26px]">
          <h2 className="text-[13px] sm:text-[19px] md:text-[26px] font-netflix font-[500] leading-[17px] sm:leading-[25px] md:leading-[34px] text-left text-[#e5e5e5]">
            Gündemdekiler
          </h2>
          <div className="flex flex-row gap-[2px] sm:gap-[3px] md:gap-[4px] justify-start items-center w-full overflow-x-auto mt-[3px] sm:mt-[4px] md:mt-[6px] mr-[5px] sm:mr-[7px] md:mr-[10px]">
            <div className="flex flex-row justify-start items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_160x284.png" 
                alt="Trending" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_10.png" 
                alt="Trending" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_1.png" 
                alt="Trending" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_11.png" 
                alt="Trending" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start w-[16%] flex-shrink-0">
              <div className="flex flex-row justify-start items-center w-full overflow-x-auto mb-[5px] sm:mb-[7px] md:mb-[10px]">
                <div className="relative w-full h-[80px] sm:h-[120px] md:h-[160px] flex justify-center items-center">
                  <Image 
                    src="/images/img_movieposter_12.png" 
                    alt="Trending" 
                    width={284} 
                    height={160}
                    className="w-full h-full rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"
                  />
                  <div className="absolute inset-0 bg-[#1414147f] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] flex justify-end items-start pt-[30px] sm:pt-[45px] md:pt-[60px] pr-[42px] sm:pr-[63px] md:pr-[84px] pb-[30px] sm:pb-[45px] md:pb-[60px] pl-[28px] sm:pl-[42px] md:pl-[56px]">
                    <Image 
                      src="/images/img_arrowleft.svg" 
                      alt="Arrow" 
                      width={32} 
                      height={32}
                      className="w-[16px] sm:w-[24px] md:w-[32px] h-[16px] sm:h-[24px] md:h-[32px] mb-[3px] sm:mb-[4px] md:mb-[6px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Netflix Orijinal İçerikleri Section */}
        <div className="flex flex-col justify-start items-start w-full ml-[30px] sm:ml-[45px] md:ml-[60px] mt-[13px] sm:mt-[19px] md:mt-[26px]">
          <h2 className="text-[13px] sm:text-[19px] md:text-[26px] font-netflix font-[500] leading-[17px] sm:leading-[25px] md:leading-[34px] text-left text-[#e5e5e5]">
            Netflix Orijinal İçerikleri
          </h2>
          <div className="flex flex-row gap-[2px] sm:gap-[3px] md:gap-[4px] justify-start items-center w-full overflow-x-auto mt-[2px] sm:mt-[3px] md:mt-[4px] mr-[5px] sm:mr-[7px] md:mr-[10px]">
            <Image 
              src="/images/img_movieposter_574x284.png" 
              alt="Netflix Original" 
              width={284} 
              height={574}
              className="w-[142px] sm:w-[213px] md:w-[284px] h-[287px] sm:h-[430px] md:h-[574px] rounded-[2px] sm:rounded-[3px] md:rounded-[4px] flex-shrink-0"
            />
            <Image 
              src="/images/img_movieposter_13.png" 
              alt="Netflix Original" 
              width={284} 
              height={574}
              className="w-[142px] sm:w-[213px] md:w-[284px] h-[287px] sm:h-[430px] md:h-[574px] rounded-[2px] sm:rounded-[3px] md:rounded-[4px] flex-shrink-0"
            />
            <Image 
              src="/images/img_movieposter_14.png" 
              alt="Netflix Original" 
              width={284} 
              height={574}
              className="w-[142px] sm:w-[213px] md:w-[284px] h-[287px] sm:h-[430px] md:h-[574px] rounded-[2px] sm:rounded-[3px] md:rounded-[4px] flex-shrink-0"
            />
            <Image 
              src="/images/img_movieposter_15.png" 
              alt="Netflix Original" 
              width={284} 
              height={574}
              className="w-[142px] sm:w-[213px] md:w-[284px] h-[287px] sm:h-[430px] md:h-[574px] rounded-[2px] sm:rounded-[3px] md:rounded-[4px] flex-shrink-0"
            />
            <div className="flex flex-col justify-start items-center w-[16%] overflow-x-auto flex-shrink-0">
              <div className="relative w-full h-[287px] sm:h-[430px] md:h-[574px] flex justify-center items-center">
                <Image 
                  src="/images/img_movieposter_16.png" 
                  alt="Netflix Original" 
                  width={284} 
                  height={574}
                  className="w-full h-full rounded-[2px] sm:rounded-[3px] md:rounded-[4px]"
                />
                <div className="absolute inset-0 bg-[#1414147f] rounded-[2px] sm:rounded-[3px] md:rounded-[4px] flex flex-col justify-center items-center pt-[135px] sm:pt-[202px] md:pt-[270px] pr-[28px] sm:pr-[42px] md:pr-[56px] pb-[135px] sm:pb-[202px] md:pb-[270px] pl-[28px] sm:pl-[42px] md:pl-[56px]">
                  <Image 
                    src="/images/img_arrow_right.svg" 
                    alt="Arrow Right" 
                    width={34} 
                    height={34}
                    className="w-[17px] sm:w-[25px] md:w-[34px] h-[17px] sm:h-[25px] md:h-[34px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Türkiye'de Bugünün Top 10 Listesi Section */}
        <div className="flex flex-col justify-start items-start w-full ml-[30px] sm:ml-[45px] md:ml-[60px] mt-[14px] sm:mt-[21px] md:mt-[28px]">
          <h2 className="text-[13px] sm:text-[19px] md:text-[26px] font-netflix font-[500] leading-[17px] sm:leading-[25px] md:leading-[34px] text-left text-[#e5e5e5]">
            Türkiye&apos;de Bugünün Top 10 Listesi
          </h2>
          <div className="flex flex-row gap-[2px] sm:gap-[3px] md:gap-[4px] justify-start items-center w-full overflow-x-auto mr-[5px] sm:mr-[7px] md:mr-[10px]">
            <div className="flex flex-row gap-[2px] sm:gap-[3px] md:gap-[4px] w-full">
              {/* Top 10 Items */}
              {[
                { rank: "/images/img_rank_01.svg", poster: "/images/img_movieposter_204x144.png" },
                { rank: "/images/img_rank_02.svg", poster: "/images/img_movieposter_17.png" },
                { rank: "/images/img_rank_03.svg", poster: "/images/img_movieposter_18.png" },
                { rank: "/images/img_rank_04.svg", poster: "/images/img_movieposter_19.png" }
              ].map((item, index) => (
                <div key={index} className="flex flex-row justify-start items-center w-auto flex-shrink-0">
                  <Image 
                    src={item.rank} 
                    alt={`Rank ${index + 1}`} 
                    width={144} 
                    height={206}
                    className="w-[72px] sm:w-[108px] md:w-[144px] h-[103px] sm:h-[154px] md:h-[206px]"
                  />
                  <Image 
                    src={item.poster} 
                    alt="Top 10 Movie" 
                    width={144} 
                    height={204}
                    className="w-[72px] sm:w-[108px] md:w-[144px] h-[102px] sm:h-[153px] md:h-[204px] -ml-[2px] sm:-ml-[3px] md:-ml-[4px]"
                  />
                </div>
              ))}
            </div>
            {/* Last Item with Arrow */}
            <div className="relative w-[16%] h-[103px] sm:h-[154px] md:h-[206px] flex justify-center items-center flex-shrink-0">
              <div className="flex flex-row justify-center items-center w-auto">
                <Image 
                  src="/images/img_rank_05.svg" 
                  alt="Rank 5" 
                  width={144} 
                  height={206}
                  className="w-[92px] sm:w-[138px] md:w-[144px] h-[103px] sm:h-[154px] md:h-[206px]"
                />
                <Image 
                  src="/images/img_movieposter_204x80.png" 
                  alt="Top 10 Movie" 
                  width={80} 
                  height={204}
                  className="w-[40px] sm:w-[60px] md:w-[80px] h-[102px] sm:h-[153px] md:h-[204px] -ml-[2px] sm:-ml-[3px] md:-ml-[4px]"
                />
              </div>
              <div className="absolute inset-0 bg-[#1414147f] flex justify-end items-center pt-[40px] sm:pt-[60px] md:pt-[80px] pr-[4px] sm:pr-[6px] md:pr-[8px] pb-[40px] sm:pb-[60px] md:pb-[80px] pl-[4px] sm:pl-[6px] md:pl-[8px]">
                <Image 
                  src="/images/img_arrowright_white_a700.svg" 
                  alt="Arrow Right" 
                  width={40} 
                  height={44}
                  className="w-[20px] sm:w-[30px] md:w-[40px] h-[22px] sm:h-[33px] md:h-[44px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Yeniden İzle Section */}
        <div className="flex flex-col justify-start items-center w-full">
          <div className="flex flex-row justify-start items-center w-full pt-0 pr-[28px] sm:pr-[42px] md:pr-[56px] pb-0 pl-[90px] sm:pl-[135px] md:pl-[180px]">
            <h2 className="text-[13px] sm:text-[19px] md:text-[26px] font-netflix font-[500] leading-[17px] sm:leading-[25px] md:leading-[34px] text-left text-[#e5e5e5]">
              Yeniden İzle
            </h2>
          </div>
          <div className="flex flex-row gap-[2px] sm:gap-[3px] md:gap-[4px] justify-center items-center w-full overflow-x-auto mt-[4px] sm:mt-[6px] md:mt-[8px] mr-[90px] sm:mr-[135px] md:mr-[180px] ml-[57px] sm:ml-[85px] md:ml-[114px]">
            {/* Left Arrow Item */}
            <div className="flex flex-row justify-center items-start w-[12%] flex-shrink-0">
              <div className="flex flex-row justify-center items-center w-full overflow-x-auto mb-[5px] sm:mb-[7px] md:mb-[10px]">
                <div className="relative w-full h-[80px] sm:h-[120px] md:h-[160px] flex justify-center items-center">
                  <Image 
                    src="/images/img_movieposter_20.png" 
                    alt="Watch Again" 
                    width={284} 
                    height={160}
                    className="w-full h-full rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"
                  />
                  <div className="absolute inset-0 bg-[#1414147f] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] flex justify-end items-start pt-[30px] sm:pt-[45px] md:pt-[60px] pr-[42px] sm:pr-[63px] md:pr-[84px] pb-[30px] sm:pb-[45px] md:pb-[60px] pl-[28px] sm:pl-[42px] md:pl-[56px]">
                    <Image 
                      src="/images/img_arrowleft.svg" 
                      alt="Arrow Left" 
                      width={32} 
                      height={32}
                      className="w-[16px] sm:w-[24px] md:w-[32px] h-[16px] sm:h-[24px] md:h-[32px] mb-[3px] sm:mb-[4px] md:mb-[6px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Watch Again Items */}
            {[
              "/images/img_movieposter_20.png",
              "/images/img_movieposter_21.png",
              "/images/img_movieposter_22.png",
              "/images/img_movieposter_23.png"
            ].map((src, index) => (
              <div key={index} className="flex flex-row justify-center items-start w-auto flex-shrink-0">
                <Image 
                  src={src} 
                  alt="Watch Again" 
                  width={284} 
                  height={160}
                  className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
                />
              </div>
            ))}
            {/* Right Arrow Item */}
            <div className="flex flex-row justify-center items-start w-[6%] flex-shrink-0">
              <div className="flex flex-row justify-center items-center w-full overflow-x-auto mb-[5px] sm:mb-[7px] md:mb-[10px]">
                <div className="relative w-full h-[80px] sm:h-[120px] md:h-[160px] flex justify-center items-center">
                  <Image 
                    src="/images/img_movieposter_24.png" 
                    alt="Watch Again" 
                    width={284} 
                    height={160}
                    className="w-full h-full rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"
                  />
                  <div className="absolute inset-0 bg-[#1414147f] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] flex justify-end items-start pt-[30px] sm:pt-[45px] md:pt-[60px] pr-[42px] sm:pr-[63px] md:pr-[84px] pb-[30px] sm:pb-[45px] md:pb-[60px] pl-[28px] sm:pl-[42px] md:pl-[56px]">
                    <Image 
                      src="/images/img_arrowleft.svg" 
                      alt="Arrow Left" 
                      width={32} 
                      height={32}
                      className="w-[16px] sm:w-[24px] md:w-[32px] h-[16px] sm:h-[24px] md:h-[32px] mb-[3px] sm:mb-[4px] md:mb-[6px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Listem Section */}
        <div className="flex flex-col justify-start items-start w-full ml-[87px] sm:ml-[130px] md:ml-[174px] mt-[13px] sm:mt-[19px] md:mt-[26px]">
          <h2 className="text-[13px] sm:text-[19px] md:text-[26px] font-netflix font-[500] leading-[17px] sm:leading-[25px] md:leading-[34px] text-left text-[#e5e5e5] self-start">
            Listem
          </h2>
          <div className="flex flex-row gap-[2px] sm:gap-[3px] md:gap-[4px] justify-center items-center w-full overflow-x-auto mt-[3px] sm:mt-[4px] md:mt-[6px] mr-[90px] sm:mr-[135px] md:mr-[180px]">
            <div className="flex flex-row justify-center items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_25.png" 
                alt="My List" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-center items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_26.png" 
                alt="My List" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-center items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_27.png" 
                alt="My List" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-center items-start w-auto flex-shrink-0">
              <Image 
                src="/images/img_movieposter_28.png" 
                alt="My List" 
                width={284} 
                height={160}
                className="w-[142px] sm:w-[213px] md:w-[284px] h-[80px] sm:h-[120px] md:h-[160px] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] mb-[5px] sm:mb-[7px] md:mb-[10px]"
              />
            </div>
            <div className="flex flex-row justify-center items-start w-[16%] flex-shrink-0">
              <div className="flex flex-row justify-center items-center w-full overflow-x-auto mb-[5px] sm:mb-[7px] md:mb-[10px]">
                <div className="relative w-full h-[80px] sm:h-[120px] md:h-[160px] flex justify-center items-center">
                  <Image 
                    src="/images/img_movieposter_29.png" 
                    alt="My List" 
                    width={284} 
                    height={160}
                    className="w-full h-full rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"
                  />
                  <div className="absolute inset-0 bg-[#1414147f] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px] flex justify-end items-start pt-[30px] sm:pt-[45px] md:pt-[60px] pr-[42px] sm:pr-[63px] md:pr-[84px] pb-[30px] sm:pb-[45px] md:pb-[60px] pl-[28px] sm:pl-[42px] md:pl-[56px]">
                    <Image 
                      src="/images/img_arrowleft.svg" 
                      alt="Arrow Left" 
                      width={32} 
                      height={32}
                      className="w-[16px] sm:w-[24px] md:w-[32px] h-[16px] sm:h-[24px] md:h-[32px] mb-[3px] sm:mb-[4px] md:mb-[6px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default NetflixHomePage;