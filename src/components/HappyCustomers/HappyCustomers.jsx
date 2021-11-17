import React from "react";
import happyClient from "../../images/happyCl.jpg";
const HappyCustomers = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center bg-fixed w-full"
        style={{
          backgroundImage: `url(${happyClient})`,
        }}
      >
        <div className="opacity-80 absolute bg-black  w-full"></div>
        <div className="container relative py-8 text-center text-black">
          <h1 className="text-4xl py-2 font-Poppins font-semibold">
            Our <span className="text-black">Tourism</span> Facts
          </h1>
          <p>
            If your smile is not becoming to you, then you should be coming to
            me!
          </p>
          <div className="flex justify-between items-center py-16">
            <div className="">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
                500K+
              </h1>
              <p className="text-black italic md:text-2xl text-1xl font-Roboto font-semibold">
                Satisfied Clients
              </p>
            </div>

            <div className="">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
                15K+
              </h1>
              <p className="text-black italic md:text-2xl text-1xl font-Roboto font-semibold">
                Active Members
              </p>
            </div>

            <div className="">
              <h1 className="md:text-4xl text-1xl font-Poppins font-extrabold">
                10K+
              </h1>
              <p className="text-black italic md:text-2xl text-1xl font-Roboto font-semibold">
                Tour Destnation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomers;
