import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Sidebar = () => {
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
  return (
    <>
      <aside className="h-screen top-0 w-1/6">
        <div className="">
          <ul>
            <li className="flex items-center py-2">
              <Link to="/dashboard">
                <i className="fas fa-home text-1xl pr-2"></i>
                <span className="hidden lg:inline-block">Dashboard</span>
              </Link>
            </li>
            <li className="flex items-center py-2">
              <Link to={`/my-booking/${currentUser?.email}`}>
                <i className="fab fa-bootstrap  text-1xl pr-2"></i>
                <span className="hidden lg:inline-block">My Booking</span>{" "}
              </Link>
            </li>
            <li className="flex items-center py-2">
              <Link to={`/booking-list`}>
                <i className="fab fa-bootstrap  text-1xl pr-2"></i>
                <span className="hidden lg:inline-block">
                  Manage Booking
                </span>{" "}
              </Link>
            </li>
            <li className="flex items-center py-2">
              <Link to="/tour-list">
                <i className="fas fa-list text-1xl pr-2"></i>
                <span className="hidden lg:inline-block">Tour List</span>
              </Link>
            </li>
            <li className="flex items-center py-2">
              <Link to="/add-tour">
                <i className="fas fa-plus text-1xl pr-2"></i>
                <span className="hidden lg:inline-block">Add Tour</span>
              </Link>
            </li>
            <li className="flex items-center text-red-400 font-bold hover:border-gray-900 py-2 border-t-2 border-gray-700">
              <Link to="#" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt text-1xl pr-2"></i>
                <span className="hidden lg:inline-block">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
