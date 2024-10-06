// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MainLayout from "./components/narbar/mainLayout";
import HomePage from "./pages/homePage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/aboutus" element={<MainLayout><AboutUs /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
