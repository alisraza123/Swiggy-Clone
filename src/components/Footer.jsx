import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-slate-800 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
         <div className=" pb-2 pl-2">
              <img src="/images/logo.png" alt="" className="w-[30px]" />
            </div>
          <p className="text-sm leading-relaxed">
            Fresh, fast & tasty food delivered to your door. Experience flavors that matter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
          <ul className="text-sm space-y-1">
            <li>Mon - Fri: 10AM - 10PM</li>
            <li>Saturday: 11AM - 11PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-red-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-slate-600">
        &copy; {new Date().getFullYear()} Swiggy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
 