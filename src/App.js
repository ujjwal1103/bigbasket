import React,{useState,useEffect,createContext} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Protected from "./pages/Protected";
import Login  from "./pages/Login";
// import Home from "./pages/Home";
// import Mycart from './pages/Mycart'
// import Profile from './pages/Profile.jsx'
// import Orders from './pages/Orders'

// import { Provider } from "react-redux";
import './App.css'
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";


const MyContext = createContext();


function App() {
  const [loginBtn, setLoginBtn] = useState(true)
  const [profileDiv , setProfileDiv] = useState(false)
  const [navBar , setNavBar] = useState(true)

  useEffect(() => {
    return () => {
      window.onload = ()=>{
        localStorage.removeItem("login")
      }
    };
  }, [])
  const states = {
    loginBtn : loginBtn,
    setLoginBtn:setLoginBtn,
    profileDiv:profileDiv,
    setProfileDiv:setProfileDiv,
    setNavBar:setNavBar
  }
  return (
    <div className="App">
      <navBar/>
      <SingleProduct/>
        {/* <Router>
             <MyContext.Provider value={states}>
                {/* {navBar && <Navbar/>}  */}
                
             {/* </MyContext.Provider>
             
             <div className="flex">
             {/* {navBar && <Sidebar/>} */}
             {/* <Routes>   */} 
                 
                 {/* <Route path="/" element={<Protected Component = {Home}/>}></Route> */}
                 {/* <Route path="/cart" element={<Protected Component = {Mycart}/>}></Route>
                 <Route path="/profile" element={<Protected Component = {Profile}/>}></Route>
                 <Route path="/contact" element={<Protected Component = {Contact}/>}></Route>
                 <Route path="/orders" element={<Protected Component = {Orders}/>}></Route>
                 <Route path="/about" element={<Protected Component = {About}/>}></Route> */}
                 
                 {/* <Route path='/login' element={<MyContext.Provider value={states}><Login/></MyContext.Provider>}></Route>
            </Routes> */}
            {/* </div> */}
            {/* <Dashboard/>   */}
        {/* </Router> */} 
    </div>
  );
} 

export default App;

export {MyContext}