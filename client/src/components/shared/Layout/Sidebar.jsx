import { Link, useLocation } from "react-router-dom";
// import { userMenu } from "./Menus/userMenu";
import { MdOutlineInventory } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { PiHospitalFill } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
import { BiSolidDonateBlood } from "react-icons/bi";

import { useSelector } from "react-redux";

export default function Sidebar({ isOpen }) {
  const location = useLocation();
  // === Get user state ===
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className="w-80 fixed top-0 left-0 min-h-screen bg-primary-red text-primary-light pt-40 z-4"
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.4s ease",
      }}
    >
      {user?.role === "organisation" && (
        <>
          <div
            className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
              location.pathname === "/"
                ? "bg-primary-light text-primary-red"
                : "hover:bg-primary-light hover:text-primary-red"
            }`}
          >
            <MdOutlineInventory size={25} />
            <Link to="/" className="w-full">
              Inventory
            </Link>
          </div>

          <div
            className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
              location.pathname === "/donor"
                ? "bg-primary-light text-primary-red"
                : "hover:bg-primary-light hover:text-primary-red"
            }`}
          >
            <FiUser size={25} />
            <Link to="/donor" className="w-full">
              Donor
            </Link>
          </div>

          <div
            className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
              location.pathname === "/hospital"
                ? "bg-primary-light text-primary-red"
                : "hover:bg-primary-light hover:text-primary-red"
            }`}
          >
            <PiHospitalFill size={25} />
            <Link to="/hospital" className="w-full">
              Hospital
            </Link>
          </div>
        </>
      )}

      {user?.role === "admin" && (
        <>
          <div
            className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
              location.pathname === "/donor-list"
                ? "bg-primary-light text-primary-red"
                : "hover:bg-primary-light hover:text-primary-red"
            }`}
          >
            <MdOutlineInventory size={25} />
            <Link to="/donor-list" className="w-full">
              Donor List
            </Link>
          </div>

          <div
            className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
              location.pathname === "/hospital-list"
                ? "bg-primary-light text-primary-red"
                : "hover:bg-primary-light hover:text-primary-red"
            }`}
          >
            <FiUser size={25} />
            <Link to="/hospital-list" className="w-full">
              Hospital List
            </Link>
          </div>

          <div
            className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
              location.pathname === "/organisation-list"
                ? "bg-primary-light text-primary-red"
                : "hover:bg-primary-light hover:text-primary-red"
            }`}
          >
            <PiHospitalFill size={25} />
            <Link to="/organisation-list" className="w-full">
              Organisation List
            </Link>
          </div>
        </>
      )}

      {(user?.role === "donor" || user?.role === "hospital") && (
        <div
          className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
            location.pathname === "/organisation"
              ? "bg-primary-light text-primary-red"
              : "hover:bg-primary-light hover:text-primary-red"
          }`}
        >
          <GoOrganization size={25} />
          <Link to="/organisation" className="w-full">
            Organisation
          </Link>
        </div>
      )}

      {user?.role === "donor" && (
        <div
          className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
            location.pathname === "/donation"
              ? "bg-primary-light text-primary-red"
              : "hover:bg-primary-light hover:text-primary-red"
          }`}
        >
          <BiSolidDonateBlood size={25} />
          <Link to="/donation" className="w-full">
            Donation
          </Link>
        </div>
      )}

      {user?.role === "hospital" && (
        <div
          className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors ${
            location.pathname === "/consumer"
              ? "bg-primary-light text-primary-red"
              : "hover:bg-primary-light hover:text-primary-red"
          }`}
        >
          <FiUser size={25} />
          <Link to="/consumer" className="w-full">
            Consumer
          </Link>
        </div>
      )}

      {/* {userMenu.map((menu) => {
        const isActive = location.pathname === menu.path;
        const Icon = menu.icon;
        return (
          <div
            key={menu.name}
            className={`flex items-center gap-3 text-2xl font-medium tracking-tight px-10 py-2 cursor-pointer transition-colors
              ${isActive 
                ? "bg-primary-light text-primary-red" 
                : "hover:bg-primary-light hover:text-primary-red"
              }`}
          >
            {Icon && <Icon size={25} />}
            <Link to={menu.path} className="w-full">
              {menu.name}
            </Link>
          </div>
        );
      })} */}
    </div>
  );
}
