import React, { useRef } from "react";
import SwiperContent from "../components/swiper/Swiper";
import dish3 from "../assets/img/dish-3.png";
import dish4 from "../assets/img/dish-4.png";
import dish5 from "../assets/img/dish-5.png";
import dish6 from "../assets/img/dish-6.png";
function SavedRecipe() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const recipicesTabs = [
    {
      valuie: "All Recipices",
      active: true,
    },
    {
      valuie: "Breakfast",
      active: false,
    },
    { valuie: "Lunch", active: false },
    { valuie: "Dinner", active: false },
    { valuie: "Dessert", active: false },
  ];

  const showcaseData = [
    {
      img: dish3,
      description: "Mediterranean Mezze",
      duration: "20 mins",
      difficutly: "Easy",
    },
    {
      img: dish4,
      description: "Silken Egg Pasta",
      duration: "20 mins",
      difficutly: "Easy",
    },

    {
      img: dish5,
      description: "Midnight Cocoa Torte",
      duration: "20 mins",
      difficutly: "Easy",
    },
    {
      img: dish6,
      description: "Mediterranean Mezze",
      duration: "20 mins",
      difficutly: "Easy",
    },
  ];
  return (
    <section>
      <div className="container font-2 fs-xs">
        <p className="fs-md">Curated Planner</p>
        <p className="">
          Map out your week with seasonal precision and editorial flair.
        </p>
        <p className="flex justify-between items-center py-10 ">
          <span>Your Schedule</span>
          <span className="flex gap-5 items-center">
            <i className="fa-solid fa-angle-left" ref={prevRef}></i>
            <i className="fa-solid fa-angle-right" ref={nextRef}></i>
          </span>
        </p>
        <SwiperContent prevRef={prevRef} nextRef={nextRef} />

        {/* library */}
        <p className="fs-xs py-5 text-green">Library</p>
        <div className="fs-xs flex  flex-col md:flex-row justify-between items-center gap-5 md:gap-5">
          <p className="fs-md">Saved Favorites</p>

          <p className="flex flex-col md:flex-row gap-2 md:gap-10  h-fit ">
            <input
              type="text"
              className="bg-white w-md  rounded-xl px-4 py-3 "
              placeholder="Search Recipies..."
            />
            <button className="rounded-xl secondary-bg text-white px-5 py-3 flex gap-3 justify-center items-center w-full md:w-auto">
              <i className="fa-regular fa-rectangle-list text-white"></i>
              Collections
            </button>
          </p>
        </div>
        <div className="recipe-tabs flex    gap-1 md:gap-5 my-5">
          {recipicesTabs.map((t, index) => (
            <p
              key={index}
              className={`py-2 px-5 rounded-xl text-center ${
                t.active ? "text-white secondary-bg" : "text-green bg-white"
              }`}
            >
              {t.valuie}
            </p>
          ))}
        </div>
        {/* 
              img-grid */}
        <div className="recipe-showcase py-5">
          <div className="flex flex-col md:flex-row flex-wrap gap-5 md:gap-3">
            {showcaseData.map((s, index) => (
              <div className="flex flex-col" key={index}>
                {/* Image wrapper */}
                <div className="img-wrapper relative h-64 w-full md:w-64">
                  <img
                    src={s.img}
                    alt="dish img"
                    className="rounded-xl w-full h-full object-cover"
                  />
                  {/* Bookmark icon */}
                  <span className="absolute top-5 right-5 bg-black/50 px-3 py-2 rounded-full">
                    <i className="fa-regular fa-bookmark text-white z-40"></i>
                  </span>
                </div>
                {/* Description */}
                <p className="fs-xs py-2">{s.description}</p>
                <p className="flex justify-start gap-5 items-center">
                  <span> {s.duration}</span>
                  <span className="text-orange"> {s.difficutly}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default SavedRecipe;
