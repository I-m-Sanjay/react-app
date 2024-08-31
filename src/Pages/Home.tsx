import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TopImage from "../assets/img.png";
import Card from '../components/Card';
import Button from '../components/Button';
import {useNavigate} from "react-router-dom"


function Home() {
    const navigate=useNavigate()
  return (
    <>
      <Navbar />

     
      <div className="relative">
        <img
          src={TopImage}
          alt="Top Image"
          className="w-full h-[490px] object-cover mb-8"
        />

       <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2185d0] text-white font-bold py-2 px-4 rounded hover:bg-[#225d8b] mt-40"
        text="CREATE EVENT" type="button" onClick={()=>navigate("/Create-event")}/>
      </div>


    <div className="ml-[150px]">

    <div>
        <h1 className="text-[#2185d0] text-[1.71428571rem] font-bold">No Upcoming Events Found</h1>
        <h1 className="text-[#2185d0] text-[1.71428571rem] font-bold mt-5">Popular Groups</h1>
    </div>
         
      <div className="lg:flex gap-8 md:flex flex-row">
        
      <Card 
        image="src/assets/img2.jpg"
        title="FOSSASIA Group"
        Description="This is a test for the FOSSASIA groups feature. Th..."
        link="#"
        linktext="Follow Group"
      />
      
      <Card 
        image="src/assets/img3.png"
        title="testing"
        Description="This is a test for the FOSSASIA groups feature. Th..."
        link="#"
        linktext="Follow Group"
      />

      </div>
        
      </div>

      <Footer />
    </>
  );
}

export default Home;
