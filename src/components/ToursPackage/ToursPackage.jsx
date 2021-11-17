import React from "react";
import { Link } from "react-router-dom";

const ToursPackage = ({ tour }) => {
  const { title, image_url, package_price, description } = tour;
  return (
    <>
      <div className="hover:shadow-lg group">
        <div className="h-1/2">
          <img className="" src={image_url} alt="" />
        </div>
        <div className="bg-card-bg group-hover:bg-primary rounded-t-3xl relative bottom-8">
          <h1 className="text-1xl border-b-2 px-8 text-primary group-hover:text-white border-red-600 py-4">
            {title}
          </h1>
          <div className="flex justify-between  px-8 py-8">
            <button className="nav-item mr-2 bg-primary rounded-3xl border border-primary group-hover:bg-card-bg group-hover:border-card-bg group-hover:text-primary text-white px-8 py-2 font-medium ">
              <Link to={`/tour-details/${tour._id}`} className="">
                Explore places
              </Link>
            </button>
            <h1>
              From <br />${package_price}
            </h1>
          </div>
          <div className="px-8 py-4">
            <p className="text-justify">{description.slice(0, 80)}...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToursPackage;
