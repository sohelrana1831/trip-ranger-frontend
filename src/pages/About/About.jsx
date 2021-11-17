import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import mission from "../../images/our-mission.jpg";
import story from "../../images/our-story.jpg";
const About = () => {
  return (
    <>
      <Breadcrumbs title="about us" />
      <div className="container lg:flex py-16">
        <div className="h-full lg:w-2/3 w-full">
          <img className="w-full" src={story} alt="" />
        </div>
        <div className="lg:ml-8">
          <h1 className="text-3xl font-Poppins font-semibold">
            We are a travel agency.
          </h1>
          <p className="py-8">
            Our approach is different. We don't plan any trips ourselves.
            Instead, we match you with up to two leading travel specialists who
            are the most qualified to make your dream trip happen. They then
            compete to design your ideal itinerary. We're experts at finding and
            matching you with the world's finest travel agents and boutique tour
            companies. Each travel specialist partner on Zicasso is personally
            and meticulously screened by us. You'll only be matched with
            specialists who are true experts at customizing your particular
            trip.
          </p>
          <div className="grid grid-cols-2">
            <ul>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  Specialized bilingual guide
                </h1>
              </li>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  Entrance fees (Cable and car and Moon Valley)
                </h1>
              </li>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  Box lunch water, banana apple and chocolate
                </h1>
              </li>
            </ul>
            <div>
              <img src={mission} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
