import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import Message from "../../components/Message/Message";

const TourList = () => {
  const [tours, setTours] = useState();
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://shocking-cheateau-10764.herokuapp.com/tour-list")
      .then((result) => {
        if (result.data.length > 0) {
          setTours(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteTour = (id) => {
    const proceed = window.confirm("Are you sure, You went to delete");
    if (proceed) {
      axios
        .delete(`https://shocking-cheateau-10764.herokuapp.com/tour/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            setMessage("Tour Package Delete success!");
            const remainingTour = tours.filter((tour) => tour._id !== id);
            setTours(remainingTour);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const statusButton = (status_id, status) => {
    let data = {};
    if (status === "pending") {
      data = { status: "active" };
    } else {
      data = { status: "pending" };
    }

    const proceed = window.confirm("Are you sure, You went to Change status");
    if (proceed && status_id) {
      axios
        .put(
          `https://shocking-cheateau-10764.herokuapp.com/update-tour-status/${status_id}`,
          data
        )
        .then((result) => {
          if (result.data.length > 0) {
            setTours(result.data);
            setLoading(false); //stop loading when data is fetched
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="container ">
      <div className="flex justify-between">
        <Sidebar />

        <main className="bg-gray-100 w-full mb-16">
          {/* Message */}
          {message && (
            <div className="md:w-2/4 py-4 px-8 float-right">
              <Message message={message} />
            </div>
          )}
          <header className="px-8 py-8">
            <h1 className="text-2xl font-semibold">Tour Package List</h1>
          </header>

          <div className="min-h-screen px-8 py-5">
            <div className="overflow-x-auto w-full">
              <table className="mx-auto  w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-gray-900">
                  <tr className="text-white text-left">
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Title
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Tour date
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Image
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Description
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Price
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                      status
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                      Create By
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {isLoading ? (
                    <div className="flex items-center justify-center mx-auto">
                      <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    tours &&
                    tours.map((tour) => (
                      <tr key={tour._id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div>
                              <p> {tour.title} </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="">{tour.tour_date}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="inline-flex w-32">
                            <img
                              className=" rounded-md"
                              alt="avatar"
                              src={tour.image_url}
                            />
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <p className="w-20 overflow-hidden overflow-ellipsis">
                            {tour.description}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          ${tour.package_price}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`text-white text-sm w-1/3 pb-1 b capitalize font-semibold px-2 rounded-full ${
                              tour.status === "pending"
                                ? "bg-red-400"
                                : "bg-green-600"
                            }`}
                          >
                            <button
                              className="btn btn-primary mt-2"
                              onClick={() =>
                                statusButton(tour?._id, tour?.status)
                              }
                            >
                              {tour?.status}
                            </button>
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p>{tour.create_by}</p>
                        </td>

                        <td className="px-6 py-4 text-center">
                          <Link
                            to={`/update-tour/${tour._id}`}
                            className="text-primary hover:underline"
                          >
                            <i className="fas fa-user-edit text-2xl "></i>
                          </Link>
                          <span className="px-2">|</span>
                          <button
                            onClick={() => handleDeleteTour(tour?._id)}
                            className="text-red-500 hover:underline"
                          >
                            <i className="far fa-trash-alt text-2xl"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TourList;
