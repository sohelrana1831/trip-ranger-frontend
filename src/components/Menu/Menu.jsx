import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState();
  const [toggle, setToggle] = useState(false);

  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const triggerToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="flex flex-wrap sticky">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
                <Link
                  to="/"
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                >
                  <h1 className="text-4xl font-bold uppercase">
                    Trip
                    <span>
                      <i className="fas fa-plane-departure text-blue-500 animate-pulse"></i>
                    </span>
                    Ranger
                  </h1>
                </Link>
                <button
                  className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/tours"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      Tours
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      Contact Us
                    </Link>
                  </li>
                  {!currentUser?.email ? (
                    <>
                      <li className="nav-item bg-secondary my-2 lg:my-0 rounded-md mr-4">
                        <Link
                          to="/login"
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="nav-item bg-indigo-500 my-2 lg:my-0 mr-4 rounded-md">
                        <Link
                          to="/register"
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        >
                          Register
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex flex-col items-center">
                        <div className="relative">
                          <div className="rounded-full w-40 bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            <li
                              onClick={triggerToggle}
                              className="bg-white flex items-center  p-1 rounded-full cursor-pointer transform transition hover:rotate-6"
                            >
                              <img
                                src={currentUser?.photoURL}
                                className="rounded-full"
                                width="35"
                                alt=""
                              />
                              <span className="text-sm px-2 text-black w-full overflow-hidden overflow-ellipsis">
                                {currentUser?.displayName || currentUser?.email}
                              </span>
                              <i className="fas fa-chevron-down"></i>
                            </li>
                          </div>
                          <div
                            className={`${
                              toggle ? "inline-block" : "hidden"
                            } absolute z-50 right-0 py-2 items-center justify-center mt-3 w-40 h-24  bg-gradient-to-br from-primary to-secondary`}
                          >
                            <li className="nav-item py-2">
                              <Link
                                to="/dashboard"
                                className="px-3 py-2 cursor-pointer items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                              >
                                <i className="fas fa-cog text-1xl px-2"></i>
                                Dashboard
                              </Link>
                            </li>
                            <li className="nav-item py-2">
                              <Link
                                to="#"
                                onClick={handleLogout}
                                className="px-3 py-2 cursor-pointer items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                              >
                                <i className="fas fa-sign-out-alt text-1xl px-2"></i>
                                Logout
                              </Link>
                            </li>
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
