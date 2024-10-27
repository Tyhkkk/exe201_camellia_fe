import { useState } from "react";

const SignUp = () => {
  // Quản lý state cho từng trường dữ liệu
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm xử lý khi người dùng nhấn nút "SIGN UP"
  const handleSignUp = (e) => {
    e.preventDefault();
    // Kiểm tra và log dữ liệu form vào console
    console.log({
      lastName,
      name,
      dob,
      gender,
      email,
      password,
    });
    // Bạn có thể thêm logic để gửi dữ liệu lên backend hoặc xử lý thêm.
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-[#7b3d35] font-jomolhari text-2xl font-semibold text-center mb-4">
          Sign up
        </h2>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-[#7b3d35] font-jomolhari mb-2">Last name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[#7b3d35] font-jomolhari mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[#7b3d35] font-jomolhari mb-2">Date of Birth</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
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
          </div>
          <div>
            <label className="block text-[#7b3d35] font-jomolhari mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[#7b3d35] font-jomolhari mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7b3d35] focus:border-[#7b3d35]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-xs text-gray-600 mt-2">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Terms of Service
            </a>{" "}
            apply.
          </div>
          <button
            type="submit"
            className="w-[163px] h-[63px] bg-[#7b3d35] text-white font-jomolhari rounded-lg hover:bg-opacity-90 transition"
          >
            SIGN UP
          </button>
          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="#" className="text-[#7b3d35] font-semibold">
              Sign in now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
