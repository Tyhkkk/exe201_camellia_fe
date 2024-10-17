// import React from 'react';
import { FiMapPin, FiPhone, FiCalendar, FiMail } from "react-icons/fi"; // Feather Icons from react-icons

const Contact = () => {
  return (
    <div className="font-jomolhari text-[#333]">
      {/* Breadcrumb */}
      <div className="border-t border-b border-[#ddd] py-2 text-left">
        <p className="text-sm ml-20">Home Page / Contact information</p>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 container ml-16">
        {/* Left side: Contact information and form */}
        <div>
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact information</h2>

            {/* Chia thành 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Left Column: Address & Phone Number */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMapPin className="w-6 h-6 mr-2 text-[#a05c55]" />
                  <div>
                    <p className="font-bold">Address</p>
                    <p className="text-gray-500">
                      525 Nguyen Xien Street, S302 Building, Vinhomes Grand
                      Park, District 9
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiPhone className="w-6 h-6 mr-2 text-[#a05c55]" />
                  <div>
                    <p className="font-bold">Phone number</p>
                    <p className="text-gray-500">1900 6574</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Opening Hours & Email Address */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiCalendar className="w-6 h-6 mr-2 text-[#a05c55]" />
                  <div>
                    <p className="font-bold">Opening hours</p>
                    <p className="text-gray-500">
                      Monday to Friday: 8:00 AM to 6:00 PM
                    </p>
                    <p className="text-gray-500">
                      Saturday and Sunday: 8:00 AM to 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMail className="w-6 h-6 mr-2 text-[#a05c55]" />
                  <div>
                    <p className="font-bold">Email address</p>
                    <p className="text-gray-500">camelliacandle@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Send your inquiries to us
            </h2>
            <p className="mb-4">
              If you have any questions, you can send your inquiries to us, and
              we will get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border rounded px-4 py-2 focus:outline-none focus:border-[#a05c55] w-full"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="border rounded px-4 py-2 focus:outline-none focus:border-[#a05c55] w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Please provide your email"
                className="border rounded px-4 py-2 focus:outline-none focus:border-[#a05c55] w-full"
              />
              <textarea
                placeholder="Information you want to provide"
                className="border rounded px-4 py-2 focus:outline-none focus:border-[#a05c55] w-full"
                rows="4"
              ></textarea>
              <div>
                <button className="bg-[#a05c55] hover:bg-[#8e524e] text-white font-bold py-2 px-6 rounded">
                  SEND TO US
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right side: Map */}
        <div className="flex justify-center items-center">
          <img
            src="/src/assets/lc1.png" // Replace with the real map image
            alt="Map Location"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
