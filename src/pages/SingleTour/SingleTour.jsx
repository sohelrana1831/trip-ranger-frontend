import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useAuth } from "../../components/Context/AuthContext";
import bookingImg from "../../images/booking.jpg";

const SingleTour = () => {
  const [data, setData] = useState();
  const { currentUser } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`https://shocking-cheateau-10764.herokuapp.com/tour/${id}`)
      .then((result) => {
        if (result.data) {
          //   console.log(result.data);
          setData(result.data);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  const status = "pending";
  const create_by = currentUser.displayName || currentUser.email;
  const create_at = new Date().toLocaleDateString();
  const tourId = data?._id;
  const onSubmit = (data) => {
    data.status = status;
    data.create_by = create_by;
    data.create_at = create_at;
    data.tourId = tourId;
    // insert tour data
    axios
      .post(`https://shocking-cheateau-10764.herokuapp.com/booking`, data)
      .then((result) => {
        if (result.data.insertedId) {
          history.push({
            pathname: `/my-booking/${currentUser.email}`,
            message: "Congratulations and best wishes for your next adventure!",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Breadcrumbs title={data?.title} />
      <div className="container py-16">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-12">
          <div className="">
            <span className="float-right text-secondary font-Poppins font-semibold text-2xl">
              Price From: ${data?.package_price}
            </span>
            <h1 className="text-2xl font-Poppins  text-secondary">
              Tour overview
            </h1>

            <p className="text-base text-gray-400 font-normal">
              Tour Date: {data?.tour_date}
            </p>
            <p className="pb-4 py-4 text-justify">{data?.description}</p>
            <img src={data?.image_url} alt="" />
          </div>

          <div
            className="shadow-lg rounded-xl bg-cover bg-no-repeat bg-center h-auto"
            style={{
              backgroundImage: `url(${bookingImg})`,
            }}
          >
            <div className="shadow-lg">
              <h1 className="text-2xl text-white px-8 py-4 font-bold font-mono border-b-2 border-solid border-black">
                Book This Tour
              </h1>

              <div className="font-semibold">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="py-4 px-8 justify-center items-center focus:outline-none">
                    <label className="text-white" htmlFor="name">
                      Name:
                    </label>
                    <input
                      className="rounded-full md:w-3/4 focus:outline-none float-right px-4 py-2"
                      defaultValue={currentUser?.displayName}
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="float-right md:w-3/4 text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="py-4 px-8 justify-center items-center focus:outline-none">
                    <label className="text-white" htmlFor="email">
                      Email:
                    </label>
                    {currentUser.email && (
                      <input
                        className="rounded-full md:w-3/4 focus:outline-none bg-gray-300 float-right px-4 py-2"
                        type="email"
                        defaultValue={currentUser?.email}
                        readOnly
                        {...register("email", { required: true })}
                      />
                    )}
                    {errors.email && (
                      <span className="float-right md:w-3/4 text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="py-4 px-8 justify-center items-center focus:outline-none">
                    <label className="text-white" htmlFor="title">
                      Package name:
                    </label>
                    {data && (
                      <input
                        className="rounded-full bg-gray-300 md:w-3/4 focus:outline-none float-right px-4 py-2"
                        defaultValue={data?.title}
                        readOnly={true}
                        {...register("title", { required: true })}
                      />
                    )}
                    {errors.title && (
                      <span className="float-right md:w-3/4 text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="py-4 px-8 justify-center items-center focus:outline-none">
                    <label className="text-white" htmlFor="tour_date">
                      Tour date:
                    </label>
                    {data && (
                      <input
                        className="rounded-full bg-gray-300 md:w-3/4 focus:outline-none float-right px-4 py-2"
                        defaultValue={data?.tour_date}
                        readOnly={true}
                        {...register("tour_date", { required: true })}
                      />
                    )}
                    {errors.tour_date && (
                      <span className="float-right md:w-3/4 text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="py-4 px-8 justify-center items-center focus:outline-none">
                    <label className="text-white" htmlFor="package_price">
                      Package price:
                    </label>
                    {data && (
                      <input
                        className="rounded-full bg-gray-300 md:w-3/4 focus:outline-none float-right px-4 py-2"
                        type="number"
                        value={data?.package_price}
                        readOnly
                        {...register("package_price", { required: true })}
                      />
                    )}
                    {errors.package_price && (
                      <span className="float-right md:w-3/4 text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="md:w-3/4 py-4 px-8 float-right">
                    <button className="bg-primary w-full border border-primary text-white px-3 py-2 font-medium rounded-full hover:bg-transparent hover:border-secondary hover:bg-secondary transition">
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTour;
