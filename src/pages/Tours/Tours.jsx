import axios from "axios";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ToursPackage from "../../components/ToursPackage/ToursPackage";

const Tours = () => {
  const [tours, setTours] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://shocking-cheateau-10764.herokuapp.com/active-tour-list")
      .then((result) => {
        if (result.data.length > 0) {
          setTours(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Breadcrumbs title="Tours" />
      <div className="container">
        <p className="text-center text-primary font-semibold">DON’T MISS</p>
        <h1 className="text-center text-5xl font-semibold">
          Find best for you
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-20">
          {isLoading ? (
            <div className="flex items-center justify-center mx-auto">
              <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
            </div>
          ) : (
            tours &&
            tours.map((tour) => <ToursPackage key={tour._id} tour={tour} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Tours;
