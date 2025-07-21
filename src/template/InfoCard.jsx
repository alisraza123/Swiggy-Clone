import React from "react";

const InfoCard = ({ Icon, title, description, border }) => {
  return (
    <div className={`${border ? "shadow" : ""} w-[100%] rounded-md p-6 flex`}>
      <div className="flex gap-4 items-start">
        <div className="flex flex-col pt-1">
          <Icon size={25} />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-400 w-[90%]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
