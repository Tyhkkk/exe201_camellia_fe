import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../src/components/narbar/mainLayout";
import AdminLayout from "../src/components/narbar/adminLayout";
import HomePage from "../src/pages/HomePage";
import AboutUs from "../src/pages/AboutUs";
import Contact from "../src/pages/Contact";
import EssentialOils from "../src/pages/product/essentialOils";
import GiftSet from "../src/pages/product/giftSet";
import CandleAccessories from "../src/pages/product/candleAccessories";
import SignUp from "../src/pages/SignUp";
import SignIn from "../src/pages/SignIn";
import AdminHome from "../src/pages/admin/adminHome";
import AdminCandle from "../src/pages/admin/adminCandle";
import AdminReview from "../src/pages/admin/adminReview";
import AdminUser from "../src/pages/admin/adminUser";
import AdminProfile from "../src/pages/admin/adminProfile";
import AdminCategory from "../src/pages/admin/adminCategory"; // Import your admin page
import { AuthProvider } from "../src/context/auth/AuthContext";
import ProtectedRoute from "../src/components/auth/ProtectRole";
import ProductDetail from "../src/pages/product/productDetail";
import Orders from "../src/pages/admin/adminOrders";
import YourCart from "../src/pages/product/yourCart";
import PayDetail from "../src/pages/product/payDetail";
import Success from "../src/pages/success";
import ProfileCustomer from "../src/pages/user/profileCus";
import ScentedCandle from "../src/pages/product/scentedCandle";


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/signup" element={<MainLayout><SignUp /></MainLayout>} />
          <Route path="/signin" element={<MainLayout><SignIn /></MainLayout>} />
          <Route path="/product/:candleId" element={<MainLayout><ProductDetail /></MainLayout>} />
          <Route path="/success" element={<MainLayout>< Success/></MainLayout>} />
          <Route path="/products/scented-candles" element={<MainLayout><ScentedCandle /></MainLayout>} />
            <Route path="/products/essential-oils" element={<MainLayout><EssentialOils /></MainLayout>} />
            <Route path="/products/gift-set" element={<MainLayout><GiftSet /></MainLayout>} />
            <Route path="/products/candle-accessories" element={<MainLayout><CandleAccessories /></MainLayout>} />
          {/* <Route path="/paydetail" element={<MainLayout><PayDetail /></MainLayout>} /> */}

          {/* Protected Customer Routes */}
          <Route element={<ProtectedRoute requiredRole="2" />}>
            <Route path="/profileCustomer" element={<MainLayout><ProfileCustomer /></MainLayout>} />
            <Route path="/aboutus" element={<MainLayout><AboutUs /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/cart" element={<MainLayout><YourCart /></MainLayout>} />
            <Route path="/paydetail" element={<MainLayout><PayDetail /></MainLayout>} />
          </Route>

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute requiredRole="1" />}>
            <Route path="/admin" element={<AdminLayout><AdminHome /></AdminLayout>} />
            <Route path="/admin/candle" element={<AdminLayout><AdminCandle /></AdminLayout>} /> {/* Example nested admin page */}
            <Route path="/admin/order" element={<AdminLayout><Orders /></AdminLayout>} /> {/* Example nested admin page */}
            <Route path="/admin/category" element={<AdminLayout><AdminCategory /></AdminLayout>} /> {/* Example nested admin page */}
            <Route path="/admin/review" element={<AdminLayout><AdminReview /></AdminLayout>} /> {/* Example nested admin page */}
            <Route path="/admin/user" element={<AdminLayout><AdminUser /></AdminLayout>} /> {/* Example nested admin page */}
            <Route path="/admin/profile" element={<AdminLayout><AdminProfile /></AdminLayout>} /> {/* Example nested admin page */}
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
