import React from "react";

const FeatureItem = ({ feature }) => {
  const { title, icon } = feature;
  return (
    <>
      <div className="text-center px-5 rounded-t-3xl bg-gradient-to-t from-white to-card-bg group">
        <div className="py-8">
          <i className={`${icon} text-8xl text-green-500`}></i>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default FeatureItem;
