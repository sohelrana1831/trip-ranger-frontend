import React from "react";
import rashed from "../../images/review/1.jpg";
import sohel from "../../images/review/2.jpg";
import lipu from "../../images/review/3.jpg";
import Review from "./Review";
const reviews = [
  {
    key: "HG42h",
    name: "Rashed Ratan",
    img: `${rashed}`,
    detail:
      "Our trip to Morocco was truly a once-in-a-lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was incredible. After reading our initial request and speaking with us on the phone, he designed a tour perfectly custom to what our interests were.",
  },
  {
    key: "SSF4",
    name: "Sohel Rana",
    img: `${sohel}`,
    detail:
      "Fantastic! Our Costa Rica travel company took care of everything. The owner and his wife met us at the airport with a care package of coffee and chocolate. It was such a nice welcome. Our drivers to and from the resort were great.",
  },
  {
    key: "GH54",
    name: "Arsaful Lipu ",
    img: `${lipu}`,
    detail:
      "This was a tour that was over two years in the making as it was delayed a full year when the world stopped vacation travel due to Covid.  As it was, Ireland had only opened indoor dining and lifted a number of pandemic restrictions only weeks before we arrived in early September.",
  },
];

const CustomerReviews = () => {
  return (
    <div className="container py-24">
      <div className="text-center w-full">
        <p className="text-primary font-semibold">TESTIMONIALS</p>
        <h1 className="py-4 text-5xl font-semibold">Customer Reviews</h1>
        <p className="">
          Regardless of your situation, we can help you exit your comfort zone,
          like we’ve done for <br /> other people. Hear what some of them have
          to say:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-20">
        {reviews.map((review) => (
          <Review key={review.key} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
