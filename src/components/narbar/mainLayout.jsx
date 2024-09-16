// import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const MainLayout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main
          className="flex-grow container mx-auto p-4 "
          style={{ maxHeight: "calc(100vh - 128px)" }}
        >
          {children} {/* Render children ở đây */}
        </main>
        <Footer />
      </div>
    );
  };
  

export default MainLayout;