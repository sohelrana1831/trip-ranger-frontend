import React from "react";

const Review = ({ review }) => {
  const { name, img, detail } = review;
  return (
    <>
      <div className="shadow-lg px-4 pb-8 rounded-lg border hover:border-primary">
        <div className="flex justify-center items-center py-8">
          <img className="rounded-full w-32" src={img} alt="" />
          <div className="px-8">
            <h1 className="text-2xl font-mono font-bold">{name}</h1>
            {/* <p>Programer</p> */}
          </div>
        </div>
        <p className="text-justify opacity-60 font-mono">
          {/* text =40 */}
          {detail}
        </p>
      </div>
    </>
  );
};

export default Review;
