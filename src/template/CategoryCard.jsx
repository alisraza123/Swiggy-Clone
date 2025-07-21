import React from "react";

const CategoryCard = ({ image, title, rating, maxTime, minTime, name, offerText }) => {
  return (
    <div className="w-full h-auto">
      <div className="h-[200px] relative w-full">
        <div className="bg-gradient-to-b to-gray-800 from-transparent opacity-80 absolute top-0 h-full w-full"></div>
        <img src={image} alt={title} className="w-full h-full rounded-2xl" />
        <h3 className="text-center w-full absolute bottom-1 font-bold text-white">
          {offerText}
        </h3>
      </div>

      <div className="w-full text-left font-bold">
        <p className="mt-2 text-[15px] w-full">{title}</p>
      </div>

      <div className="flex items-center gap-1">
        <img src="/images/top/star.png" className="w-[15px]" alt="star" />
        <span>{rating}</span>*
        <span>{maxTime}</span>-
        <span>{minTime}</span>
      </div>

      <p className="text-gray-500">{name}</p>
    </div>
  );
};

export default CategoryCard;
