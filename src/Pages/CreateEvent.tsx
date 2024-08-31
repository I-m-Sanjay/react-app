import Footer from "../components/Footer"
import InputField from "../components/Input"
import Navbar from "../components/Navbar"

function CreateEvent(){
  return(
    <>
    <Navbar/>

    <div className="mr-36 ml-36 mt-16 ">
      <h1 className="text-4xl font-light  text-gray-500">Create an Event</h1>

    <div className="mt-6">
    <InputField
      name="uname"
      type="text"
      id="uname"
      placeholder="Enter Event Name"
      className="w-full border-2 border-gray-500 px-4 py-2 rounded-lg "
      label="Event Name:"
      labelClassName="font-bold "
    />
</div>

</div>
    <div className="mb-10">

    </div>
    <Footer/>
    </>
  )
}

export default CreateEvent