import Button from "../components/Button";
import InputField from "../components/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiMailFill, RiLockFill } from 'react-icons/ri';

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="w-96 bg-white shadow-xl border-1 border-gray-500 rounded-xl">
          <div className="p-5">
            <div className="mt-2">
              <h1 className="font-semibold text-black text-xl">Register</h1>
            </div>

            <div className="mt-5">
              <InputField
                name="uname"
                icon={<RiMailFill />}
                type="text"
                id="uname"
                placeholder="Email Id"
                className="w-full border-2 border-gray-500 px-8 py-2 rounded-lg"
              />
            </div>

            <div className="mt-5 relative">
              <InputField
                icon={<RiLockFill />}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full border-2 border-gray-500 px-8 py-2 rounded-lg"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none border-l border-black h-full pl-2"
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
            </div>

            <div className="mt-5 relative">
              <InputField
                icon={<RiLockFill />}
                type={showRePassword ? "text" : "password"}
                name="re-password"
                id="re-password"
                placeholder="Re-Enter Password"
                className="w-full border-2 border-gray-500 px-8 py-2 rounded-lg"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <button
                  type="button"
                  onClick={toggleRePasswordVisibility}
                  className="focus:outline-none border-l border-black h-full pl-2"
                >
                  {showRePassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <Button
                type="button"
                text="Register"
                onClick={() => navigate("/")}
                className="bg-[#00b5ad] px-[100px] py-2 rounded-lg text-white hover:bg-[#539b98]"
              />
            </div>
          </div>

          <div className="w-full flex justify-center p-5 bg-[#f3f4f5]">
            <Link to="/login" className="font-bold text-gray-500 hover:text-[#555]">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
