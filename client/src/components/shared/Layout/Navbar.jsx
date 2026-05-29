import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";
import { useSelector } from "react-redux";

import { BiSolidDonateBlood } from "react-icons/bi";

import {
  MdSupportAgent,
  MdInfoOutline,
  MdPhone,
  MdOutlineBloodtype,
  MdLogout,
} from "react-icons/md";

import { FiChevronDown } from "react-icons/fi";

import { getProfileMenuItems } from "./Menus/userMenu";

const navLinks = [
  { to: "/blood", icon: BiSolidDonateBlood, label: "Donate Blood" },
  { to: "/help", icon: MdSupportAgent, label: "Need Help" },
  { to: "/about", icon: MdInfoOutline, label: "About Us" },
  { to: "/contact", icon: MdPhone, label: "Contact Us" },
];

const roleLabels = {
  donor: "Donor",
  admin: "Admin",
  hospital: "Hospital",
  organisation: "Organisation",
};

function getDisplayName(user) {
  const role = user?.role;

  if (role === "hospital") {
    return user?.hospitalName ?? user?.name;
  }

  if (role === "organisation") {
    return user?.organisationName ?? user?.name;
  }

  return user?.name;
}

/* ---------------------------------- */
/* HAMBURGER BUTTON */
/* ---------------------------------- */

function HamburgerButton({ open, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-11 h-11 sm:w-11 sm:h-11 rounded-full bg-primary-green/10 hover:bg-primary-green/20 transition-colors duration-200 shrink-0 ${className}`}
      aria-label="Toggle menu"
    >
      <div className="flex flex-col gap-0.5 w-4">
        {[
          {
            transform: open ? "translateY(4px) rotate(45deg)" : "none",
            opacity: 1,
          },
          {
            transform: "none",
            opacity: open ? 0 : 1,
          },
          {
            transform: open ? "translateY(-4px) rotate(-45deg)" : "none",
            opacity: 1,
          },
        ].map((s, i) => (
          <span
            key={i}
            className="block w-4 h-0.5 bg-primary-dark rounded-full transition-all duration-300 ease-in-out"
            style={{
              transform: s.transform,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const role = user?.role ?? "user";
  const roleLabel = roleLabels[role];
  const displayName = getDisplayName(user);
  const profileMenuItems = getProfileMenuItems(user?.role);

  useLenis(({ scroll }) => {
    setScrolled(scroll > 50);
  });

  useEffect(() => {
    function handleOutsideClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-primary-light border-b border-primary-dark/10"
      style={{
        height: scrolled ? "48px" : "64px",
        transition: "height 0.3s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-full gap-3">
          {/* ---------------------------------- */}
          {/* LEFT */}
          {/* ---------------------------------- */}

          <div className="flex items-center gap-2 shrink-0">
            <img
              src="./logo1.png"
              alt="logo"
              className="h-8 sm:h-9 object-contain"
            />

            <NavLink
              to="/"
              className="text-lg sm:text-2xl font-bold tracking-tight text-primary-dark whitespace-nowrap"
            >
              RaktSeva
            </NavLink>
          </div>

          {/* ---------------------------------- */}
          {/* DESKTOP NAV LINKS */}
          {/* ---------------------------------- */}

          <div className="hidden md:flex items-center flex-wrap justify-center">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base font-medium tracking-tight transition-colors duration-200 ${
                      isActive
                        ? "text-primary-green"
                        : "text-primary-dark/50"
                    }`
                  }
                >
                  <Icon size={18} />

                  {link.label}
                </NavLink>
              );
            })}
          </div>

          {/* ---------------------------------- */}
          {/* RIGHT SECTION */}
          {/* ---------------------------------- */}

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* PROFILE */}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="flex items-center gap-2 p-1.5 rounded-full bg-primary-green/10 hover:bg-primary-green/20 transition-all duration-200 cursor-pointer"
              >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-primary-green/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary-green">
                    {displayName?.charAt(0)?.toUpperCase()}
                  </span>
                </div>

                {/* Name + Dropdown wrapper */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-sm font-medium text-primary-dark/70 truncate">
                    {displayName}
                  </span>

                  <FiChevronDown
                    size={16}
                    className={`text-primary-dark/50 transition-transform duration-200 shrink-0 ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* ---------------------------------- */}
              {/* PROFILE DROPDOWN */}
              {/* ---------------------------------- */}

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-[280px] max-w-[90vw] bg-primary-light rounded-2xl shadow-2xl border border-primary-green/20 overflow-hidden">
                  {/* USER HEADER */}

                  <div className="p-4 bg-primary-green/10 border-b border-primary-green/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary-green/20 flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-primary-green">
                          {displayName?.charAt(0)?.toUpperCase()}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-primary-dark truncate">
                          Welcome, {displayName}
                        </p>

                        <p className="text-xs text-primary-dark/50 truncate">
                          {user?.email}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          {user?.bloodGroup && (
                            <div className="flex items-center gap-1 text-primary-green">
                              <MdOutlineBloodtype size={14} />

                              <span className="text-xs font-medium">
                                {user.bloodGroup}
                              </span>
                            </div>
                          )}

                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary-green/10 text-primary-green font-semibold">
                            {roleLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MENU ITEMS */}

                  <div className="py-2">
                    {profileMenuItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          onClick={() => setProfileOpen(false)}
                          onMouseEnter={() => setHoveredItem(item.to)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-primary-dark/80 hover:bg-primary-green/10 hover:text-primary-green transition-colors duration-150"
                        >
                          <Icon
                            size={16}
                            className={`transition-colors duration-150 ${
                              hoveredItem === item.to
                                ? "text-primary-green"
                                : ""
                            }`}
                          />

                          {item.label}
                        </NavLink>
                      );
                    })}
                  </div>

                  {/* LOGOUT */}

                  <div className="border-t border-primary-green/20 p-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-4 py-2 rounded-xl text-sm font-semibold text-primary-red hover:bg-primary-red/10 transition-colors duration-150 cursor-pointer"
                    >
                      <MdLogout size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ---------------------------------- */}
            {/* MOBILE NAV MENU TOGGLE */}
            {/* ---------------------------------- */}

            <HamburgerButton
              open={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden"
            />
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}
      {/* MOBILE MENU */}
      {/* ---------------------------------- */}

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary-green/10 bg-primary-light shadow-xl max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="p-4 flex flex-col gap-1">
            <p className="px-3 pt-1 pb-2 text-xs font-semibold uppercase tracking-wider text-primary-dark/40">
              Pages
            </p>
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary-green"
                        : "text-primary-dark/50"
                    }`
                  }
                >
                  <Icon size={18} />

                  {link.label}
                </NavLink>
              );
            })}

            {profileMenuItems.length > 0 && (
              <>
                <div className="my-2 border-t border-primary-green/10" />
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary-dark/40">
                  Dashboard
                </p>
                {profileMenuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-primary-green"
                            : "text-primary-dark/50"
                        }`
                      }
                    >
                      <Icon size={18} />
                      {item.label}
                    </NavLink>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
