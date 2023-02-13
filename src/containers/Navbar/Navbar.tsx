import logo from "../../../public/logo.png";
import "./navbar.scss";


function Navbar() {
  return (
    <nav className="w-screen py-3 px-6 fixed top-0 left-0 border-b border-[#e5e5e7]" >
      <div className="" >
        <div className="flex items-center cursor-pointer" >
          <img src={logo} alt="logo" className="app__navbar-logo w-[50px] h-[50px] object-cover" />
          <div className="text-black ml-1 text-[1.5rem]" >LiveFree</div>
        </div>
        <div>
          
        </div>
      </div>
    </nav>
  )
};


export default Navbar;

