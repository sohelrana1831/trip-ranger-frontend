import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../components/Context/AuthContext";
import Sidebar from "../../components/Dashboard/Sidebar";
import Message from "../../components/Message/Message";
const MyBooking = () => {
  const [message, setMessage] = useState("");
  const [booking, setBooking] = useState();
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const { id } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    setMessage(location.message);
  }, [location]);

  useEffect(() => {
    axios
      .get(`https://shocking-cheateau-10764.herokuapp.com/my-booking/${id}`)
      .then((result) => {
        if (result.data.length > 0) {
          setBooking(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, [id]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, You went to delete");
    if (proceed) {
      axios
        .delete(`https://shocking-cheateau-10764.herokuapp.com/booking/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            setMessage("Delete success!");
            const remainingBooking = booking.filter(
              (booking) => booking._id !== id
            );
            setBooking(remainingBooking);
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
            <div className="md:w-3/4 py-4 px-8 float-right">
              <Message message={message} />
            </div>
          )}
          <header className="px-8 py-8">
            <h1 className="text-2xl font-semibold">
              Hi, {currentUser?.displayName} hear your booking
            </h1>
          </header>

          <div className="min-h-screen py-5 px-8">
            <div className="overflow-x-auto w-full">
              <table className="mx-auto  w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-gray-900">
                  <tr className="text-white text-left">
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Tour name
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Tour date
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Price
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Booking DATE
                    </th>

                    <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                      status
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                      Booking By
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {isLoading && (
                    <div className="flex items-center justify-center mx-auto">
                      <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                    </div>
                  )}

                  {!!booking && booking.length > 0 ? (
                    booking.map((booking) => (
                      <tr key={booking._id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div>
                              <p> {booking?.title} </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="">{booking?.tour_date}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p>${booking?.package_price}</p>
                        </td>

                        <td className="px-6 py-4 text-center">
                          {booking?.create_at}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`text-white text-sm w-1/3 pb-1 b capitalize font-semibold px-2 rounded-full ${
                              booking.status === "pending"
                                ? "bg-red-400"
                                : "bg-green-600"
                            }`}
                          >
                            {booking?.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p>{booking?.name}</p>
                        </td>

                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleDelete(booking?._id)}
                            className="text-red-500 hover:underline"
                          >
                            <i className="far fa-trash-alt text-2xl "></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h1 className="text-center">Data Not Found.</h1>
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

export default MyBooking;
