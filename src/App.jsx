import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/narbar/mainLayout";
import AdminLayout from "./components/narbar/adminLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ScentedCandle from "./pages/product/ScentedCandle";
import EssentialOils from "./pages/product/EssentialOils";
import GiftSet from "./pages/product/GiftSet";
import CandleAccessories from "./pages/product/CandleAccessories";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AdminHome from "./pages/admin/adminHome";
import AdminCandle from "./pages/admin/adminCandle"; // Import your admin page
import { AuthProvider } from "./context/auth/AuthContext";
import ProtectedRoute from "./components/auth/ProtectRole";
import ProductDetail from "./pages/product/productDetail";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/signup" element={<MainLayout><SignUp /></MainLayout>} />
          <Route path="/signin" element={<MainLayout><SignIn /></MainLayout>} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Protected Customer Routes */}
          <Route element={<ProtectedRoute requiredRole="2" />}>
            <Route path="/aboutus" element={<MainLayout><AboutUs /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/products/scented-candles" element={<MainLayout><ScentedCandle /></MainLayout>} />
            <Route path="/products/essential-oils" element={<MainLayout><EssentialOils /></MainLayout>} />
            <Route path="/products/gift-set" element={<MainLayout><GiftSet /></MainLayout>} />
            <Route path="/products/candle-accessories" element={<MainLayout><CandleAccessories /></MainLayout>} />
          </Route>

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute requiredRole="1" />}>
            <Route path="/admin" element={<AdminLayout><AdminHome /></AdminLayout>} />
            <Route path="/admin/candle" element={<AdminLayout><AdminCandle /></AdminLayout>} /> {/* Example nested admin page */}
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
