// import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-2">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-4/12">
              <h3 className="text-2xl font-bold">CourtBooking</h3>
              <p className="mt-1 mb-2 text-gray-400">
                CourtBooking is a website that helps you find the best match for
                you.
              </p>
              <div className="flex space-x-4">
                <a href="/" className="hover:text-red-500">
                  <svg
                    width="20"
                    height="20"
                    className="fill-current text-gray-400 hover:text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M257,210c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45C302,230.186,281.814,210,257,210z" />
                    <path
                      d="M255,0C114.39,0,0,114.39,0,255s114.39,257,255,257s257-116.39,257-257S395.61,0,255,0z M362,330
                      c-20.273,0-38.152-10.161-49.017-25.596C299.23,319.971,279.354,330,257,330c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75
                      c16.948,0,32.426,5.865,45,15.383V195c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15c0,33.36,0,41.625,0,75
                      c0,16.538,13.462,30,30,30c16.538,0,30-13.462,30-30c0-100.391-66.432-150-135-150c-74.443,0-135,60.557-135,135
                      s60.557,135,135,135c30,0,58.374-9.609,82.061-27.803c15.822-12.078,33.94,11.765,18.281,23.789
                      C328.353,408.237,293.665,420,257,420c-90.981,0-165-74.019-165-165S166.019,90,257,90c82.897,0,165,61.135,165,180
                      C422,303.091,395.091,330,362,330z"
                    />
                  </svg>
                </a>
                <a href="/" className="hover:text-blue-500">
                  <svg
                    className="fill-current text-gray-400 hover:text-blue-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="/" className="hover:text-black">
                  <svg
                    className="fill-current text-gray-400 hover:text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Website</title>
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="21.17" y1="8" x2="12" y2="8"></line>
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                  </svg>
                </a>
                <a href="/" className="hover:text-pink-600">
                  <svg
                    className="fill-current text-gray-400 hover:text-pink-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.275-.073-1.65-.073-4.859s.013-3.586.073-4.859c.061-1.171.256-1.816.421-2.236.224-.562.479-.96.899-1.379.42-.421.825-.69 1.381-.9.42-.165 1.065-.36 2.236-.421C8.414 2.179 8.793 2.16 12 2.16zm0 3.681c-2.496 0-4.517 2.022-4.517 4.518S9.504 14.876 12 14.876s4.517-2.022 4.517-4.517-2.022-4.517-4.517-4.517zm0 7.36c-1.573 0-2.843-1.27-2.843-2.843S10.427 7.515 12 7.515s2.843 1.27 2.843 2.843-1.27 2.843-2.843 2.843zm6.406-8.481c-.586 0-1.062-.476-1.062-1.062s.476-1.062 1.062-1.062 1.062.476 1.062 1.062-.476 1.062-1.062 1.062z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 mt-2 md:mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold">Services</h4>
                  <ul className="mt-1 space-y-1 text-gray-400">
                    <li>
                      <a href="/" className="hover:text-white">
                        Booking Court{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/tournament" className="hover:text-white">
                        Tournament
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-white">
                        Find a Club
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Company</h4>
                  <ul className="mt-1 space-y-1 text-gray-400">
                    <li>
                      <a href="/" className="hover:text-white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-white">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-white">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Support</h4>
                  <ul className="mt-1 space-y-1 text-gray-400">
                    <li>
                      <a href="/" className="hover:text-white">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-white">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-white">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Legal</h4>
                  <ul className="mt-1 space-y-1 text-gray-400">
                    <li>
                      <a href="/" className="hover:text-white">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-white">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-white">
                        Security
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            © 2024 CourtBooking. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;