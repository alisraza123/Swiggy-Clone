import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import CategoryCard from "../template/CategoryCard";

const OnlineFood = () => {
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
      </div>
      <div className="onlineDelivery grid md:grid-cols-3 md:grid-rows-3 
      lg:grid-cols-4 
      max-[300px]:grid-cols-1
      sm:grid-cols-3 sm:grid-rows-3 grid-cols-2 gap-4 ">
         {categories.map((category, index) => (
          <CategoryCard 
          image={category.image}
          maxTime={category.maxTime}
          minTime={category.minTime}
          name={category.name}
          title={category.title}
          rating={category.rating}
          offerText={"50% Off Above $230"}
          />
        ))}

      </div>
    </div>
  );
};

export default OnlineFood;
