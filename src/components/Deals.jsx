import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import CategoryCard from "../template/CategoryCard";

const Deals = () => {
  const [categories, setCategory] = useState([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5001/restaurantChains");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="relative max-w-[1200px] mx-auto px-[10px] py-[20px] md:px-8 lg:px-12 pb-10 pt-12 border-b-[2px] ">
      <div className="flex my-3 items-center justify-between pb-10">
        <h2 className="sm:text-xl text-[5vw] font-semibold pr-1">
          Top Restaurant Chains in Jodhpur
        </h2>

        {/* Custom Buttons */}
        <div className="flex gap-2 ">
          <button
            ref={prevRef}
            className="w-[8vw] h-[8vw] sm:w-8 sm:h-8 bg-gray-200 text-black rounded-full flex items-center justify-center hover:bg-gray-400"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="w-[8vw] h-[8vw] sm:w-8 sm:h-8  bg-gray-200 text-black rounded-full flex items-center justify-center hover:bg-gray-400"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={3}
        onBeforeInit={(swiper) => {
          // 👇 Connect external buttons to Swiper navigation
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mySwiper"
        breakpoints={{
          10: { slidesPerView: 1 },
          300: { slidesPerView: 1 },
          400: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
          <CategoryCard 
          image={category.image}
          maxTime={category.maxTime}
          minTime={category.minTime}
          name={category.name}
          title={category.title}
          rating={category.rating}
          offerText={"50% Off Above $230"}
          
          />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Deals;
