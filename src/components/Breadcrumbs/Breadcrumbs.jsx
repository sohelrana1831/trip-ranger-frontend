import React from "react";
import breadcrumbs_img from "../../images/breadcrumbs.jpg";
const Breadcrumbs = ({ title }) => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center h-96 py-36"
        style={{
          backgroundImage: `url(${breadcrumbs_img})`,
          backgroundPosition: "bottom center",
          backgroundColor: "#000",
        }}
      >
        {/* <div className="opacity-60 top-20 absolute bg-black  w-full h-96"></div> */}
        <div className="mx-auto justify-center items-center h-full">
          <h1 className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl text-2xl font-bold text-white capitalize">
            {title}
          </h1>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url('https://demo.bosathemes.com/html/travele/assets/images/slider-pattern.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          content: "",
          height: "150px",
          width: "100%",
          marginTop: "-100px",
          position: "relative",
        }}
      ></div>
    </>
  );
};

export default Breadcrumbs;
