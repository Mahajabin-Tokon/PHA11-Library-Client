import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, handleLogout, isDark, setIsDark } = useContext(authContext);
  // const userFromFirebase = auth.currentUser

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allVisas">All Visas</NavLink>
      </li>
      <li>
        <NavLink to="/addVisa">Add Visa</NavLink>
      </li>
      <li>
        <NavLink to="/myAddedVisas">My Added Visas</NavLink>
      </li>
      <li>
        <NavLink to="/myVisaApplication">My Visa Application</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar  theme-controller ${
        isDark ? "bg-gray-900 text-gray-50" : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl">VisaPro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      {user?.email ? (
        <div className="navbar-end gap-4">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="m-1">
              <img
                referrerPolicy="no-referrer"
                className="rounded-full"
                width="38"
                height="38"
                src={user?.photoURL}
                alt="User Photo"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
            >
              <li>
                <a>{user?.displayName}</a>
              </li>
              <li>
                <Link onClick={handleLogout} to="/login" className="btn">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end gap-4">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Regsiter
          </Link>
        </div>
      )}
      <button
        onClick={() => setIsDark(!isDark)}
        className="bg-gray-200 p-3 rounded-full m-1"
      >
        {isDark ? (
          <MdOutlineDarkMode className="text-black" />
        ) : (
          <MdOutlineLightMode />
        )}
      </button>
    </div>
  );
};

export default Navbar;
