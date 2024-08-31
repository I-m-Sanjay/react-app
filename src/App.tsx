import Register from "./Pages/Register"
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import ForgetPassword from "./Pages/ForgetPassword"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CreateEvent from "./Pages/CreateEvent";

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Re-Password" element={<ForgetPassword/>}/>
        <Route path="/Create-event" element={<CreateEvent/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;