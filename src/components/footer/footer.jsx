import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt, FaTelegramPlane } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import Logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div className="flex flex-col gap-5">
          <img src={Logo} alt="Logo" className="w-40 h-auto" />
          <div className="flex items-start gap-3">
            <IoLocationOutline className="text-2xl text-[#3BB77E]" />
            <p className="text-gray-600">Address: 5171 W Campbell Ave</p>
          </div>
          <div className="flex items-start gap-3">
            <FaHeadphonesAlt className="text-2xl text-[#3BB77E]" />
            <p className="text-gray-600">Kent, Utah 53127 United States</p>
          </div>
          <div className="flex items-start gap-3">
            <FaTelegramPlane className="text-2xl text-[#3BB77E]" />
            <p className="text-gray-600">Email: sale@Nest.com</p>
          </div>
          <div className="flex items-start gap-3">
            <CiClock1 className="text-2xl text-[#3BB77E]" />
            <p className="text-gray-600">Hours: 10:00 - 18:00, Mon - Sat</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold text-[#253D4E]">About Us</h4>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Delivery Information</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Privacy Policy</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Terms & Conditions</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Contact Us</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Support Center</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Careers</p>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          <h4 className="text-xl font-semibold text-[#253D4E]">Account</h4>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Sign In</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">My Wishlist</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Track My Order</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Help Ticket</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Shipping Details</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Compare Products</p>
        </div>

        <div className="hidden md:flex flex-col gap-4">
          <h4 className="text-xl font-semibold text-[#253D4E]">Corporate</h4>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Become a Vendor</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Affiliate Program</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Farm Business</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Help Ticket</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Farm Careers</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Our Suppliers</p>
        </div>

        <div className="hidden md:flex flex-col gap-4">
          <h4 className="text-xl font-semibold text-[#253D4E]">Popular</h4>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Become a Vendor</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Affiliate Program</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Farm Business</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Help Ticket</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Farm Careers</p>
          <p className="text-gray-600 hover:text-[#3BB77E] cursor-pointer">Cheese</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// import { FaHeadphonesAlt } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
// import { CiClock1 } from "react-icons/ci";
// import Logo from '@/assets/logo.png'
// const Footer = () => {
//   return (
//     <div className="container mx-auto mt-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
//         <div className="flex flex-col gap-5">
//           <img
//             className="w-[120px] object-contain h-[40px]"
//             src={Logo}
//             alt=""
//           />
//           <div className="flex items-start md:flex lg:flex gap-[8px] ">
//             <button className="pt-[5px]">
//               <IoLocationOutline />
//             </button>
//             <p className="text-[#253D4E] text-[14px] text-start">
//               Address: 5171 W Campbell Ave
//             </p>
//           </div>
//           <div className="flex items-start md:flex lg:flex gap-[8px] ">
//             <button className="pt-[5px]">
//               <FaHeadphonesAlt />
//             </button>
//             <p className="text-[#253D4E] text-[14px] text-start">
//               undefined Kent, Utah 53127 United State
//             </p>
//           </div>
//           <div className="flex items-start md:flex lg:flex gap-[8px] ">
//             <button className="pt-[5px]">
//               <FaTelegramPlane />
//             </button>
//             <p className="text-[#253D4E] text-[14px] text-start">
//               Email:sale@Nest.com
//             </p>
//           </div>
//           <div className="flex items-start md:flex lg:flex gap-[8px] ">
//             <button className="pt-[5px]">
//               <CiClock1 />
//             </button>
//             <p className="text-[#253D4E] text-[14px] text-start">
//               Hours:10:00 - 18:00, Mon - Sat
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col gap-5">
//           <b className="text-[22px] text-[#253D4E] font-[700] text-start">
//             About Us
//           </b>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Delivery Information
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Privacy Policy
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Terms & Conditions
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">Contact Us</p>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Support Center
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">Careers</p>
//         </div>
//         <div className="lg:flex flex-col hidden gap-5">
//           <b className="text-[22px] text-[#253D4E] font-[700] text-start">
//             Account
//           </b>
//           <p className="text-[14px] text-[#253D4E] text-start">Sign In</p>
//           <p className="text-[14px] text-[#253D4E] text-start">My Wishlist</p>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Track My Order
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Shipping Details
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Compare products
//           </p>
//         </div>
//         <div className="md:flex lg:flex  hidden flex-col gap-5">
//           <b className="text-[22px] text-[#253D4E] font-[700] text-start">
//             Corporate
//           </b>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Become a Vendor
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Affiliate Program
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">Farm Business</p>
//           <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
//           <p className="text-[14px] text-[#253D4E] text-start">Farm Careers</p>
//           <p className="text-[14px] text-[#253D4E] text-start">Our Suppliers</p>
//         </div>
//         <div className="md:flex lg:flex  hidden flex-col gap-5">
//           <b className="text-[22px] text-[#253D4E] font-[700] text-start">
//             Popular
//           </b>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Become a Vendor
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">
//             Affiliate Program
//           </p>
//           <p className="text-[14px] text-[#253D4E] text-start">Farm Business</p>
//           <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
//           <p className="text-[14px] text-[#253D4E] text-start">Farm Careers</p>
//           <p className="text-[14px] text-[#253D4E] text-start">Cheese</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
