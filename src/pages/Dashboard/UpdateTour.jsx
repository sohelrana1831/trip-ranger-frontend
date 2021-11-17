import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../components/Context/AuthContext";
import Sidebar from "../../components/Dashboard/Sidebar";
import Message from "../../components/Message/Message";
const axios = require("axios");

const UpdateTour = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const { id } = useParams();

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get(`https://shocking-cheateau-10764.herokuapp.com/tour/${id}`)
      .then((result) => {
        if (result.data) {
          //   console.log(result.data);
          setData(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  const create_by = currentUser.displayName || currentUser.email;
  const create_at = new Date().toLocaleDateString();
  const handleSubmit = (e) => {
    e.preventDefault();
    data.create_by = create_by;
    data.create_at = create_at;

    // insert tour data
    axios
      .put(
        `https://shocking-cheateau-10764.herokuapp.com/update-tour/${id}`,
        data
      )
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          setMessage("Tour Package updated success!");
        }
      })
      .catch((error) => console.log(error));
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
            {isLoading ? (
              <div className="flex items-center justify-center mx-auto">
                <div className="w-10 h-10 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
              </div>
            ) : (
              <h1 className="text-2xl font-semibold capitalize">
                Update Tour Package: {data?.title}
              </h1>
            )}
          </header>

          <form onSubmit={handleSubmit}>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="title">
                Title:
              </label>
              <input
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                placeholder="Enter Tour Title"
                value={data?.title}
                onChange={onChange}
                name="title"
                required
              />
            </div>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="tour_date">
                Tour Date:
              </label>
              <input
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                type="date"
                value={data?.tour_date}
                onChange={onChange}
                name="tour_date"
                required
              />
            </div>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="image_url">
                Image url:
              </label>
              <input
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                type="url"
                placeholder="Enter tour related image url"
                value={data?.image_url}
                onChange={onChange}
                name="image_url"
                required
              />
            </div>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="description">
                Description:
              </label>
              <textarea
                className="rounded-md md:w-3/4 focus:outline-none float-right px-4 mb-4 py-2"
                rows="4"
                placeholder="Description about tour"
                value={data?.description}
                onChange={onChange}
                name="description"
                required
              />
            </div>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="package_price">
                Package price:
              </label>
              <input
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                type="number"
                placeholder="Package price"
                value={data?.package_price}
                onChange={onChange}
                name="package_price"
                required
              />
            </div>

            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="package_price">
                Status:
              </label>

              <select
                name="status"
                id="status"
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                value={data?.status}
                onChange={onChange}
              >
                <option value="active">Activate</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div className="md:w-3/4 py-4 px-8 float-right">
              <button className="bg-primary w-full border border-primary text-white px-3 py-2 font-medium rounded-full hover:bg-transparent hover:border-secondary hover:bg-secondary transition">
                Update
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default UpdateTour;
