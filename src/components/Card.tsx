import React from "react"
import {Link} from "react-router-dom"
interface cardProps{
 image:string;
 title:string;
 Description:string;
 link:string;
 linktext:string;

}

const Card:React.FC<cardProps>=({
image,title,Description,link,linktext
})=>{
  return(
    <>
    <div className="bg-white w-80 h-auto mb-10 rounded-2xl mt-10 border border-gray-300">
            <div>
              <img src={image} className="w-full rounded-t-lg" />
            </div>

            <div className="p-3 pt-5 font-bold text-xl">
              <h1>{title}</h1>
            </div>

            <div className="p-3 mb-10">
              <p>{Description}</p>
            </div>

            <div className="w-full bg-[#2185d0] p-4 rounded-b-lg text-center text-white font-bold hover:bg-[#225d8b]">
              <Link to={link} className="">{linktext}</Link>
            </div>
          </div>
    </>

  )
}

export default Card;