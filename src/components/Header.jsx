import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FiMenu,FiHouse } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import HeaderBtn from "./HeaderBtn";
export default function Header({ title, border, underline }) {


  
  let Links = [
    { title: "Offers", link:"/offers", underline: "-bottom-[1rem]   bg-[#e20112]" },
    { title: "Sale",link:"/category/sale", underline: "-bottom-[1.3rem]" },
    { title: "Rent",link:"/category/rent", underline: "-bottom-[1.3rem]" },
    { title: "Mortgage",link:"/offers", underline: "-bottom-[1.3rem]" },
    { title: "Find Realtors",link:"/offers", underline: "-bottom-[1.3rem]" },
    { title: "My Home",link:"/offers", underline: "-bottom-[1.3rem]" },
    { title: "News & Insights",link:"/offers", underline: "-bottom-[1.3rem]" },
    {
      title: "Manage Rentals",link:"/offers",
      border: "border p-1 rounded-[0.3rem] border-gray-400",
    },
    {
      title: "Advertise",link:"/offers",
      border: "border p-1 rounded-[0.3rem] border-gray-400",
    },
  ];




 
  let [open, setOpen] =useState(false);
  let [close, setClose] =useState(false);










  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex  justify-between h-14 px-4 items-center max-w-[98vw] sm:max-w-[90vw]  lg:max-w-[85vw]  mx-auto whitespace-nowrap">
         {/* Left Menu */}
         <div className="flex">
         <div onClick={()=>setOpen(!open)}  className=" lg:hidden flex items-center " >
         {
                   open ? <XMarkIcon  className="w-7 h-7"/> : <Bars3BottomRightIcon className="w-7 h-7" />
                }
        </div>
        {/*}
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}  https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg
  />*/}
          <div className="shrink-0 pr-2 flex lg:item-center my-3">
          {/* Logo */}
          <div className=" -my-[0.5rem] cursor-pointer flex text-cyan-600">
          <svg  onClick={() => navigate("/")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

             <h1  onClick={() => navigate("/")} className="text-0xl font-semibold italic text-black">
              Casey<span className="text-cyan-600">MiltonHomes</span></h1>
          </div>
        </div>
        </div>




         {/* Links 

         <div className="lg:hidden absolute  top-[40px] left-[0rem] w-[100%] z-40 mx-[-99]  bg-white">
          <ul className={`inline-block   space-x-1 items-center lg:pb-0 pb-12  w-full space-y-11 sm:space-y-15 py-4  ${open ? 'top-12' : 'top-[-490px] hidden'}`}>
            {buttons.map((button) => (
              <HeaderBtn
                title={button.title}
                border={button.border}
              />
            ))}
          </ul>
        </div>



         <div className="hidden lg:flex   ">
          <ul className={`flex   space-x-1 items-center  flex-col w-full space-y-2  lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2   py-4 `}>
            {buttons.map((button) => (
              <HeaderBtn
                title={button.title}
                border={button.border}
                underline={button.underline}
              />
            ))}
          </ul>
        </div>

            */}

            {/* link.mobile items */}

<div className="lg:hidden absolute  top-[55px] right-[11.1rem] w-[100%] text-center z-40 mx-[-99]  bg-white  ">
              <ul className={`inline-block border-2 mb-3  space-x-0 items-center lg:pb-0 pb-12  w-full space-y-20 sm:space-y-15 py-4  ${open ? 'top-12' : 'top-[-490px] hidden'}`}>
                
                    <li  onClick={() => navigate("/")} className='hover:text-cyan-600 relative my-3  border-black text-center margin-bottom-3 left-9 group text-[18px] whitespace-nowrap'>
                    <a  href="/" className="hover:text-cyan-600" >Home</a>
                       
                    </li>
                    <li  onClick={() => navigate("/category/sale")} className='hover:text-cyan-600 relative text-center  left-6 group text-[18px] whitespace-nowrap'>
                    <a  href="/category/sale" className={`px-2  `}>Buy</a>
                       
                    </li>
                    <li  onClick={() => navigate("/category/rent")} className='hover:text-cyan-600 relative text-center  left-6 group text-[18px] whitespace-nowrap'>
                    <a  href="/category/rent" className={`px-2  `}>Rent</a>
                       
                    </li>
                    <li  onClick={() => navigate("/about")} className='hover:text-cyan-600 relative text-center left-11 group text-[18px] whitespace-nowrap'>
                        <a href="/about" className={`px-2 ${border} `}>About Us</a>
                       
                    </li>
                    <li  onClick={() => navigate("/agent")} className='hover:text-cyan-600 relative text-center text-center left-[40px] group text-[18px] whitespace-nowrap'>
                        <a href="/agent" className={`px-2 ${border}text-center `}> Agents</a>
                       
                    </li>
                    <li onClick={() => navigate("/offers")} className='relative  text-center group left-[70px] text-[15px] whitespace-nowrap'>
                        <a href="/offers" className={`px-2 ${border} text-cyan-600 `}>Trennding Houses</a>
                       
                    </li>
          {/* Logo */}
          <svg  onClick={() => navigate("/")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

             <h1  onClick={() => navigate("")} className="text-1xl font-semibold text-white italic text-black">
              Casey<span className="text-white">Homes</span></h1>
              <h1  onClick={() => navigate("")} className="text-white text-1xl font-semibold italic text-black">
              Casey<span className="text-white">Homes</span></h1>
          
        
                    {/*
                    <li className='relative text-center group text-[20px] whitespace-nowrap'>
                        <a href="/" className={`px-2 ${border} `}>My Home</a>
                       
                    </li>
                    <li className='relative text-center group text-[20px] whitespace-nowrap'>
                        <a href="/" className={`px-2 ${border} `}>News & Realtor</a>
                       
                    </li>
                    <li className='relative text-center group text-[20px] whitespace-nowrap'>
                        <a href="/" className={`px-2 ${border} `}>Manage Rentals</a>
                       
                    </li>
                    <li className='relative text-center group text-[20px] whitespace-nowrap'>
                        <a href="/" className={`px-2 ${border} `}>Advertise</a>
                       
          </li>*/}
                    
               
                </ul>
          </div>





              {/* linke items */}
              <div className="hidden lg:flex  ">
              <ul className={`flex   group text-[20px] whitespace-nowrap gap-5  space-x-2 items-center   w-full space-y-0  lg:w-auto lg:space-y-0 lg:space-x-2   py-4`}>
                 <li onClick={() => navigate("/")} className="hover:text-cyan-600 cursor-pointer  ">Home </li>
                 <li onClick={() => navigate("/category/sale")} className="hover:text-cyan-600 cursor-pointer"> Buy</li>
                 <li onClick={() => navigate("/category/rent")} className="hover:text-cyan-600 cursor-pointer"> Rent</li>
                 <li onClick={() => navigate("/about")} className="hover:text-cyan-600 cursor-pointer ">About Us </li>
                 <li onClick={() => navigate("/agent")} className="hover:text-cyan-600 cursor-pointer">Agents </li>
                 <li onClick={() => navigate("/offers")} className="cursor-pointer">Trendinng Homes</li>
                {/*} <li onClick={() => navigate("/")} className="cursor-pointer ">My Home </li>
                 <li onClick={() => navigate("/")} className="cursor-pointer">News & Insights </li>
                 <li onClick={() => navigate("/")}  className="cursor-pointer border p-1 rounded-[0.3rem] border-gray-400">Manage Rentals </li>
                 <li onClick={() => navigate("/")} className="cursor-pointer border p-1 rounded-[0.3rem] border-gray-400">Advertise </li>
          */}
                </ul>
                </div>



        {/* Right Authentification */}
        <div className="flex h-full items-center  lg:hidden">
          <div onClick={()=>setClose(!close)} className="w-10 h-10 bg-cyan-600 rounded-full text-white flex items-center justify-center ">
            {
           close ? <HiOutlineUser className="text-[28px] " />:<HiOutlineUser className="text-[28px] " />
            }
          </div>
        </div>


        <div  onClick={() => navigate("/profile")} className="lg:flex absolute text-center text-[1.1rem]  top-[55px] left-[18.7rem] w-[20.5%] z-40 mx-[-99]  bg-white">
          
        <li
              className={` inline-block border-2 mb-3  space-x-0 items-center lg:pb-0 pb-12  w-full space-y-20 sm:space-y-15 py-4 ${close ? 'top-12' : 'top-[-490px] hidden '} ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
            >
          <button ><a href="">{pageState} </a></button>
          </li>
         
        
    
        </div>





        <div className="hidden  lg:flex   items-center pl-6 text-[13px]">
        <li
              className={` bg-cyan-700  hover:bg-sky-700  py-[10px] text-white rounded-full px-4 ml-6 flex items-center ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
          <button >{pageState}</button>
          </li>
        
    
        </div>




        {/*<div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>*/}
      </header>
    </div>
  );
}