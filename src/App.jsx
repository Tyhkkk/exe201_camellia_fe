import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MainLayout from "./components/narbar/mainLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ScentedCandle from "./pages/product/scentedCandle";
import EssentialOils from "./pages/product/essentialOils";
import GiftSet from "./pages/product/giftSet";
import CandleAccessories from "./pages/product/candleAccessories";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/auth/AuthContext"; // Import AuthProvider

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Đặt AuthProvider bên trong Router */}
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/aboutus" element={<MainLayout><AboutUs /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/products/scented-candles" element={<MainLayout><ScentedCandle /></MainLayout>} />
          <Route path="/products/essential-oils" element={<MainLayout><EssentialOils /></MainLayout>} />
          <Route path="/products/gift-set" element={<MainLayout><GiftSet /></MainLayout>} />
          <Route path="/products/candle-accessories" element={<MainLayout><CandleAccessories /></MainLayout>} />
          <Route path="/signup" element={<MainLayout><SignUp /></MainLayout>} />
          <Route path="/signin" element={<MainLayout><SignIn /></MainLayout>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
