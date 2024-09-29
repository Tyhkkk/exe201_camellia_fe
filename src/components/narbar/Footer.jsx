import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaCcJcb } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { CiBank } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div
        className="grid grid-cols-3 items-center bg-[#f7f3ef] py-8 px-2"
        style={{ fontFamily: "Jomolhari" }}
      >
        {/* Left Section */}
        <div className="text-left">
          <h2 className="text-[#9e645b] text-lg font-semibold">
            Receive a special discount code now
          </h2>
          <p className="text-[#9e645b] text-sm">
            Sign up for email updates to follow Camellia`s discounted products
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex items-center justify-center space-x-2">
          <CiMail className="text-xl text-[#9e645b]" />
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-[#9e645b] px-2 py-1 rounded-lg text-[#9e645b] focus:outline-none"
          />
          <button className="bg-[#9e645b] text-white px-4 py-1 rounded-lg">
            SIGN UP
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end justify-center">
          <h2 className="text-[#9e645b] text-lg font-semibold mb-2">
            Connect with us
          </h2>
          <div className="flex justify-end space-x-4">
            <CiFacebook className="text-3xl text-[#9e645b] hover:text-[#d18b82] cursor-pointer" />
            <AiFillTwitterCircle className="text-3xl text-[#9e645b] hover:text-[#d18b82] cursor-pointer" />
            <FaInstagram className="text-3xl text-[#9e645b] hover:text-[#d18b82] cursor-pointer" />
            <FaYoutube className="text-3xl text-[#9e645b] hover:text-[#d18b82] cursor-pointer" />
            <FaGoogle className="text-3xl text-[#9e645b] hover:text-[#d18b82] cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-12 gap-4 bg-[#f7f3ef] py-8 px-4"
        style={{ fontFamily: "Jomolhari" }}
      >
        {/* Left Section - Company Information */}
        <div className="col-span-6 text-left">
          <h2 className="text-[#9e645b] text-lg font-semibold">
            Camellia Candle Manufacturing And Trading Joint Stock Company
          </h2>
          <p className="text-[#9e645b] text-sm">
            Business Registration Certificate No: 0316668883 - issued by the Ho
            Chi Minh City Department of Planning and Investment on January 12,
            2024. Representative: Mrs. Lan Anh
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center text-[#9e645b]">
              <FaMapMarkerAlt className="mr-2" /> 525 Nguyen Xien Street, S302
              Building, Vinhomes Grand Park, District 9
            </p>
            <p className="flex items-center text-[#9e645b]">
              <FaPhoneAlt className="mr-2" /> 1900 6574
            </p>
            <p className="flex items-center text-[#9e645b]">
              <GoMail className="mr-2" /> camelliacandle@gmail.com
            </p>
          </div>
        </div>

        {/* Policy Section */}
        <div className="col-span-2 text-left">
          <h2 className="text-[#9e645b] text-lg font-semibold">Policy</h2>
          <ul className="text-[#9e645b] text-sm space-y-1 list-disc list-inside">
            <li>
              <a href="/return-policy" className="hover:underline">
                Return Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/payment-policy" className="hover:underline">
                Payment Policy
              </a>
            </li>
            <li>
              <a href="/shipping-policy" className="hover:underline">
                Shipping Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div className="col-span-2 text-left">
          <h2 className="text-[#9e645b] text-lg font-semibold">
            Customer Support
          </h2>
          <ul className="text-[#9e645b] text-sm space-y-1 list-disc list-inside">
            <li>
              <a href="/searching" className="hover:underline">
                Searching
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="col-span-2 text-left">
          <h2 className="text-[#9e645b] text-lg font-semibold">About Us</h2>
          <ul className="text-[#9e645b] text-sm space-y-1 list-disc list-inside">
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Payment Methods Section */}
        <div className="col-span-12 mt-8">
          <h2 className="text-[#9e645b] text-lg font-semibold">
            Payment Methods
          </h2>
          <div className="flex space-x-4 mt-4">
            <FaCcJcb className="text-3xl text-[#9e645b]" />
            <FaCcVisa className="text-3xl text-[#9e645b]" />
            <FaCcMastercard className="text-3xl text-[#9e645b]" />
            <BsCashCoin className="text-3xl text-[#9e645b]" />
            <CiBank className="text-3xl text-[#9e645b]" />
          </div>
        </div>
      </div>
      

{/* Copyright Section */}
<div className="bg-[#f7f3ef] py-4 border-t-2 border-[#9e645b]">
  <div className="text-center text-[#9e645b] text-sm" style={{ fontFamily: 'Jomolhari' }}>
    Copyright © 2024 Camellia Candle Manufacturing and Trading Joint Stock Company
  </div>
</div>
    </footer>
  );
};

export default Footer;
