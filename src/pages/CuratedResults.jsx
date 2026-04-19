import React from "react";
import pasta from "../assets/img/Fresh Basil Pasta.png";
import salad from "../assets/img/Salad Bowl.png";
import carrot from "../assets/img/Roasted Carrots.png";
import pesto from "../assets/img/Pesto Gnocchi.png";
import bowl from "../assets/img/Salad Bowl.png";
function CuratedResults() {
  const recipicesTabs = [
    {
      valuie: "All Matches",
      active: true,
    },
    {
      valuie: "Quick (under 30m)",
      active: false,
    },
    { valuie: "Vegetarian", active: false },
    { valuie: "Low Carb", active: false },
    { valuie: "High Protein", active: false },
  ];
  const recipegrid1 = [
    {
      img: pasta,
      description: "Fresh Basil Tagliatelle",
      duration: "20 mins",
      match: "98% match",
    },
    {
      img: salad,
      description: "Fresh Basil Tagliatelle",
      duration: "20 mins",
      match: "98% match",
    },
  ];
  const recipegrid2 = [
    {
      img: carrot,
      description: "Roasted Carrots",
      duration: "20 mins",
      match: "98% match",
    },
    {
      img: pesto,
      description: "Pesto Gnocchi",
      duration: "20 mins",
      match: "98% match",
    },
    {
      img: bowl,
      description: "Salad Bowl",
      duration: "20 mins",
      match: "98% match",
    },
  ];
  return (
    <section className="py-10">
      <div className="container font-2 fs-xs">
        <p className="fs-md">Curated Results</p>
        <p className=" flex justify-between items-center">
          <span>
            We found 12 exceptional recipes that harmonize with your pantry,
            <br />
            staples. Every dish is selected for balance and seasonality.
          </span>
          <button className=" rounded-xl bg-white px-5 py-3 ">
            {" "}
            Sort by revelent <i class="fa-solid fa-angle-down"></i>
          </button>
        </p>
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
        <div className="img-carousel">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5">
            {recipegrid1.map((r, index) => (
              <div
                className="img-wrapper relative rounded-xl overflow-hidden flex-3"
                key={index}
              >
                <img
                  src={r.img}
                  alt={r.description}
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="flex gap-3 text-sm">
                    <span>
                      <i class="fa-regular fa-clock"></i>
                      {r.duration}
                    </span>
                    <span>
                      <i class="fa-solid fa-utensils"></i>
                      {r.match}
                    </span>
                  </p>
                  <p className="font-medium">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 my-2">
          {recipegrid2.map((r, index) => (
            <div
              className="img-wrapper relative rounded-xl overflow-hidden flex-3"
              key={index}
            >
              <img
                src={r.img}
                alt={r.description}
                className="rounded-xl w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="flex gap-3 text-sm">
                  <span>
                    <i class="fa-regular fa-clock"></i>
                    {r.duration}
                  </span>
                  <span>
                    <i class="fa-solid fa-utensils"></i>
                    {r.match}
                  </span>
                </p>
                <p className="font-medium">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CuratedResults;
