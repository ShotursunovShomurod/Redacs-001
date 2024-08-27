import { useState } from "react";
import "./header.css";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "@/context/index";
import { GrLogout } from "react-icons/gr";
const Hader = () => {
  const [{ wishlist, cart }, dispatch] = useStateValue();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex items-center fixed z-30 left-0 top-0 gap-[69px] w-full px-3 bg-white justify-between pt-5 bg-">
          <Link to={"/"}>
            <img
              className="w-[130px] h-[50px] object-contain flex flex-1"
              src="https://logodix.com/logo/26494.png"
              alt=""
            />
          </Link>

          {/* <div className=" rounded-[5px] border hidden gap-3 py-[6px] px-[8px] sm:flex md:flex lg:flex ">
            <button>
              <CiLocationOn />
            </button>
            <select
              className="border-none outline-none text-[14px] text-[#3BB77E]  "
              name=""
              id=""
            >
              <option value="">Your Location</option>
              <option value="">Toshkent</option>
              <option value="">Samarqand</option>
              <option value="">Namangan</option>
              <option value="">Andijon</option>
              <option value="">Fargona</option>
            </select>
          </div> */}
          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
              <div className="flex items-center flex-col relative gap-1">
                <sup className="absolute right-0 text-blue-500">{wishlist.length}</sup>
                <CiHeart className="text-[24px] " />
                <NavLink
                  className={
                    "border-none outline-none text-[14px]  text-[#253D4E] pl-2 font-bold "
                  }
                  to={"/wishlist"}
                >
                  Wishlist
                </NavLink>
              </div>
              {/* <div className="flex items-center gap-1 navbar__collection">
                <IoCartOutline className="text-[24px] " />
                <sup>{cart.length}</sup>
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/Cart"}
                >
                  Cart
                </NavLink>
              </div> */}
              {/* <div className="flex items-center gap-1">
                <IoPersonOutline className="text-[24px] " />
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] navbar__collection"
                  }
                  to={"/Account"}
                >
                  Account
                </NavLink>
              </div> */}
              <button
            onClick={() => dispatch({ type: "LOGOUT", payload: cart })}
            className="border-none outline-none flex flex-col items-center text-[17px] font-bold  text-[#253D4E] pl-2"
          >
            <GrLogout />
            Logout
          </button>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hader;
