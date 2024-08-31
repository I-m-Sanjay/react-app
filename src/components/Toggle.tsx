import InputField from "./Input"
import {useState} from "react"
import { RiLockFill, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

function Toggle(){

  const[showPassword,setShowPasssword]=useState(false)

  const togglePasswordVisibility=()=>{
    setShowPasssword(!showPassword)
  }
  return(
  <>
  <InputField
  icon={<RiLockFill/>}
  type={showPassword?"text":"password"
  }
  name="password"
  id="password"
  placeholder="password"
  className=""/>

<div>
  <button
    type="button"
    onClick={togglePasswordVisibility}
    className="">
  {showPassword?<RiEyeLine/>:<RiEyeOffLine/>}
  </button>
</div>
 
  </>
  )
}

export default Toggle