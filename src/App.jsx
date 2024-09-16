// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MainLayout from "./components/narbar/mainLayout";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
