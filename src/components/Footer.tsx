import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-black p-10">
        <div className="flex flex-col md:flex-row md:space-x-12 justify-center">
          <div className="text-gray-500 flex flex-col space-y-2 border-b md:border-b-0 md:border-r border-gray-500 md:pr-8 pb-4 md:pb-0">
            <Link to="#" >Use eventyay</Link>
            <Link to="#" className="hover:text-white">How it works</Link>
            <Link to="#" className="hover:text-white">Pricing</Link>
            <Link to="#" className="hover:text-white">Use eventyay</Link>
          </div>

          <div className="text-gray-500 flex flex-col space-y-2 border-b md:border-b-0 md:border-r border-gray-500 md:pr-8 pb-4 md:pb-0">
            <Link to="#" >Plan Events</Link>
            <Link to="#" className="hover:text-white">Online Registration</Link>
            <Link to="#" className="hover:text-white">Sell Event Tickets</Link>
            <Link to="#" className="hover:text-white">Event Management Software</Link>
          </div>

          <div className="text-gray-500 flex flex-col space-y-2 border-b md:border-b-0 md:border-r border-gray-500 md:pr-8 pb-4 md:pb-0">
            <Link to="#" >Find Events</Link>
            <Link to="#" className="hover:text-white">Browse Events</Link>
            <Link to="#" className="hover:text-white">Attendee App</Link>
            <Link to="#" className="hover:text-white">Organizer</Link>
          </div>

          <div className="text-gray-500 flex flex-col space-y-2">
            <Link to="#">Connect With Us</Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between px-5 md:px-80 space-y-4 md:space-y-0 " >
          <div className="text-gray-500 text-center md:text-left">
            <p>Maintained by FOSSASIA | © 2024 eventyay</p>
          </div>
          <div className="text-center">
            <button className="bg-gray-500 text-white px-4 py-2 hover:bg-gray-600 text-sm">
              English
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
