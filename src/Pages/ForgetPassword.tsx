import Button from "../components/Button";
import InputField from "../components/Input";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import { RiMailFill } from 'react-icons/ri';


function ForgetPassword(){
  const navigate=useNavigate()
  return(
    <>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="w-96 bg-white  shadow-xl border-1 border-gray-500  rounded-xl">
          <div className="p-5">
         <div className="mt-2">
          <h1 className="font-semibold text-black text-xl">Login</h1>
         </div>
        
         <div className="mt-5 p-auto`"> 
          <InputField icon={<RiMailFill />} type="text" name="email" id="email" placeholder="Email Id" className="w-full border-2 border-gray-500 px-8 py-2 rounded-lg " />
         </div>


         <div className="flex justify-center mt-5">
          <Button type="button" text="Reset Password" onClick={()=>navigate("/login")} className="bg-[#00b5ad] px-[100px] py-2 rounded-lg text-white hover:bg-[#539b98]"/>
        </div>
      
        </div>

        <div className=" w-full flex justify-center p-5  bg-[#f3f4f5]">
          <Link to="/register" className=" font-bold text-gray-500 hover:text-[#555]">New to site?Create Account</Link>
        </div>
       
        </div>
      </div>
    </>
  )
}
export default ForgetPassword