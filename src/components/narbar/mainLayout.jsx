// import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className=" bg-[#fdf6f3] flex-grow mx-auto  w-full" // Loại bỏ container giới hạn chiều rộng
        style={{ maxHeight: "calc(900vh - 128px)" }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
