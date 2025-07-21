import React, { useEffect, useState } from "react";
import { RxCaretDown, RxOpacity } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import Links from "../template/Links";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpBuoy } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import MobileLinks from "../template/MobileLinks";
import { MdOutlineMoreTime } from "react-icons/md";
import InfoCard from "../template/InfoCard";
import { MdMyLocation } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [desktopMenuToggle, setDesktopMenuToggle] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //Desktop Side Menu
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  // show hide Mobile Menu
  const showMobileMenu = () => {
    if (window.innerWidth < 768) {
      setToggle(false); // Close mobile menu if side menu opens
    }
    setTimeout(() => {
      setIsMobileMenuOpen(true);
    }, 200);
  };
  const hideMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDesktopMenuToggle(true);
      } else {
        setDesktopMenuToggle(false);
      }
    };
    // Initial check
    handleResize();
    // Resize listener
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [toggle]);
  return (
    <>
      <div
        className="blackOverlay fixed w-full h-full duration-200 md:block hidden z-50"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      ></div>

      <div
        className="md:w-[550px] w-full h-screen bg-white duration-200 absolute left-0 top-16 md:top-0 md:left-0 z-50 "
        style={{
          left: toggle ? "0%" : "-100%",
        }}
      >
        <div
          className={`h-screen flex flex-col justify-start pt-12 sm:pt-0 sm:justify-center sm:items-end items-start px-5 md:px-0`}
          onClick={() => {
            setToggle(false);
          }}
        >
          <div className=" flex flex-col bg-white sm:gap-10 gap-5 pr-5 sm:w-[80%] w-[100%]">
            <div>
              <input
                className="w-[100%] py-4 px-2 shadow border  rounded-md"
                type="text"
                placeholder="Search for areas, street name,.."
              />
            </div>
            <InfoCard
              border={true}
              Icon={MdMyLocation}
              title={"Get Current Location"}
              description={"Using GPS"}
            />
            <div className="border flex flex-col gap-4 py-10 px-2">
              <p className="text-gray-400 pl-16 ">RECENT SEARCHES</p>
              <InfoCard
                border={false}
                Icon={MdOutlineMoreTime}
                title={"Get Current Location"}
                description={`House #47, Street 3, Officers Colony
Near GT Road, Wah Cantt, Taxila, Punjab, Pakistan`}
              />
              <InfoCard
                border={false}
                Icon={MdOutlineMoreTime}
                title={"Get Current Location"}
                description={`House#215, Street 8, Sector G-11/3
                Near Kashmir Highway, Islamabad, Pakistan`}
              />
            </div>
          </div>
        </div>
      </div>

      <header className="shadow-xl px-[12px] py-[20px] md:p-[15px] md:px-5 lg:px-20 ">
        <div className="max-w-[1200px] mx-auto flex flex-row sm:flex-row justify-between gap-4 items-center">
          <div className="flex items-center gap-2">
            <div className="w-[5vw]">
              <img src="/images/logo.png" alt="" className="w-[30px]" />
            </div>

            <div className="flex items-center gap-2 md:text-[15px] text-[4vw]">
              <span className="font-bold border-b-[3px] border-black md:text-[15px] text-[4vw]">
                Ratanda{" "}
              </span>{" "}
              Jodhpur, Rajasthan , India
              <RxCaretDown
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setIsMobileMenuOpen(false);

                    setTimeout(() => {
                      setToggle(!toggle);
                    }, 200);
                  } else {
                    setToggle(true); // desktop behavior unchanged
                  }
                }}
                fontSize={25}
                className=" font-bold text-[0.9rem] text-[#fc8019] font-"
              />
            </div>
          </div>
          <div className="md:hidden">
            {" "}
            {/* Sirf mobile par visible */}
            {isMobileMenuOpen ? (
              <div className="w-[4vw] pr-4">
                
                <IoMdClose onClick={hideMobileMenu} className="block " />
              </div>
            ) : (
              <div className="w-[4vw] pr-4">
                <RiMenu3Line onClick={showMobileMenu} className="block" />
              </div>
            )}
          </div>

          <nav
            className={`flex
           list-none md:gap-8 lg:gap-10 ${
             desktopMenuToggle ? "hidden" : "block"
           } 
           `}
          >
            <Links name={"Search"} icon={<CiSearch />} />
            <Links name={"Offers"} icon={<BiSolidOffer />} />
            <Links name={"Help"} icon={<IoMdHelpBuoy />} />
            <Links name={"Sign In"} icon={<CiUser />} />
          </nav>
        </div>

        {/* Mobile Menu  */}

        <nav
          className={`
    absolute w-full left-0 bg-white overflow-hidden mt-5 
    transition-all duration-500 ease-in-out px-2 z-50 shadow
    ${isMobileMenuOpen ? "max-h-[600px]" : "max-h-0"}
    ${desktopMenuToggle ? "block" : "hidden"}
  `}
        >
          {/* Fixed padding INSIDE to avoid content animation */}
          <div className="p-4 flex flex-col gap-4 px-4 py-10">
            <MobileLinks name={"Search"} icon={<CiSearch size={25} />} />
            <MobileLinks name={"Offers"} icon={<BiSolidOffer size={25} />} />
            <MobileLinks name={"Help"} icon={<IoMdHelpBuoy size={25} />} />
            <MobileLinks name={"Sign In"} icon={<CiUser size={25} />} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
