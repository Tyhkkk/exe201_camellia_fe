import { useState } from "react";
import apiClient from "../lib/apiService"; // Sử dụng apiClient từ thư viện
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  // const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Điều hướng sau khi đăng ký thành công

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Kiểm tra thông tin đầu vào
    if (!name || !email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    // Định dạng payload gửi đến API
    const userData = {
      username: `${lastName} ${name}`,
      email,
      passwordHash: password,
      roleId: 2, // Luôn luôn là khách hàng
    };

    try {
      setIsLoading(true); // Hiển thị trạng thái tải
      const response = await apiClient.post("/api/User/create", userData);

      // Kiểm tra phản hồi từ API
      if (response.data?.userId) {
        alert("Sign up successful! Redirecting to login page...");
        navigate("/signin"); // Điều hướng về trang đăng nhập
      } else {
        alert("Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      alert("An error occurred during sign up. Please try again.");
    } finally {
      setIsLoading(false); // Tắt trạng thái tải
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fdf6f3]">
      <div className="bg-[#fdf6f3] p-8 rounded-lg shadow-lg max-w-xl w-full">
        <div className="flex justify-center mb-4">
          <a href="/signin" className="text-[#7b3d35] font-jomolhari text-2xl font-semibold">Sign in</a>
          <span className="mx-2">|</span>
          <button className="text-[#7b3d35] font-jomolhari text-2xl font-semibold">Sign up</button>
        </div>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
          />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
          />
          {/* <div className="flex justify-between">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={() => setGender("female")}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={() => setGender("male")}
                className="mr-2"
              />
              Male
            </label>
          </div> */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
          />
          <div className="text-xs text-gray-600 mt-2">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-600">Privacy Policy</a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">Terms of Service</a>{" "}
            apply.
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-[163px] h-[63px] bg-[#7b3d35] text-white font-jomolhari rounded-lg hover:bg-opacity-90 transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Signing Up..." : "SIGN UP"}
          </button>
          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-[#7b3d35] font-semibold">Sign in now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
