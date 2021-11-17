import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../components/Context/AuthContext";
import Sidebar from "../../components/Dashboard/Sidebar";
import Message from "../../components/Message/Message";

const axios = require("axios");

const AddTour = () => {
  const [message, setMessage] = useState("");
  const { currentUser } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const status = "pending";
  const create_by = currentUser.displayName || currentUser.email;
  const create_at = new Date().toLocaleDateString();
  const onSubmit = (data) => {
    data.status = status;
    data.create_by = create_by;
    data.create_at = create_at;

    // insert tour data
    axios
      .post("https://shocking-cheateau-10764.herokuapp.com/add-tour", data)
      .then((result) => {
        if (result.data.insertedId) {
          setMessage("Tour Package added success!");
          reset();
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
            <div className="md:w-3/4 py-4 px-8 float-right">
              <Message message={message} />
            </div>
          )}

          <header className="px-8 py-8">
            <h1 className="text-2xl font-semibold">Add Tour Package</h1>
          </header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="title">
                Title:
              </label>
              <input
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                placeholder="Enter Tour Title"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="float-right md:w-3/4 text-red-500">
                  This title is required
                </span>
              )}
            </div>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="tour_date">
                Tour Date:
              </label>
              <input
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                type="date"
                {...register("tour_date", { required: true })}
              />
              {errors.tour_date && (
                <span className="float-right md:w-3/4 text-red-500">
                  This date is required
                </span>
              )}
            </div>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="image_url">
                Image url:
              </label>
              <input
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                type="url"
                placeholder="Enter tour related image url"
                {...register("image_url", { required: true })}
              />
              {errors.image_url && (
                <span className="float-right md:w-3/4 text-red-500">
                  This image url is required
                </span>
              )}
            </div>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="description">
                Description:
              </label>
              <textarea
                className="rounded-md md:w-3/4 focus:outline-none float-right px-4 mb-4 py-2"
                rows="4"
                placeholder="Description about tour"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="float-right md:w-3/4 text-red-500">
                  This description is required
                </span>
              )}
            </div>
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="package_price">
                Package price:
              </label>
              <input
                className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                type="number"
                placeholder="Package price"
                {...register("package_price", { required: true })}
              />
              {errors.package_price && (
                <span className="float-right md:w-3/4 text-red-500">
                  This package price is required
                </span>
              )}
            </div>

            <div className="md:w-3/4 py-4 px-8 float-right">
              <button className="bg-primary w-full border border-primary text-white px-3 py-2 font-medium rounded-full hover:bg-transparent hover:border-secondary hover:bg-secondary transition">
                Add Tour
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddTour;
