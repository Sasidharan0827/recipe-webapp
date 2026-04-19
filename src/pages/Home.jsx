import React from "react";
import banner from "../assets/img/Fresh ingredients.png";
import lemon from "../assets/img/Fresh Lemons.png";
import garlic from "../assets/img/Garlic bulbs.png";
import kale from "../assets/img/Fresh Kale.png";
import pasta from "../assets/img/Dry Pasta.png";
function Home() {
  const ingrdients = [
    {
      name: "Tomato",
      icon: "fa-solid fa-plate-wheat",
    },
    {
      name: "Tomato",
      icon: "fa-solid fa-plate-wheat",
    },

    {
      name: "Tomato",
      icon: "fa-solid fa-plate-wheat",
    },
  ];
  const ingredienyData = [
    {
      img: lemon,
      name: "lemon",
      tag: "Season Pick",
    },
    {
      img: garlic,
      name: "garlic",
      tag: "Season Pick",
    },
    {
      img: kale,
      name: "kale",
      tag: "Season Pick",
    },
    {
      img: pasta,
      name: "pasta",
      tag: "Season Pick",
    },
  ];
  return (
    <>
      <section className="fs-xs py-5">
        <div className="container font-2">
          <div className="my-10">
            <div className="content-1 content-bg  rounded-xl">
              <div className="flex items-center fs-sm  ">
                <div className=" px-10  flex flex-col gap-10 md:gap-5  sm:gap-5">
                  <p className="fs-lg fw-300">
                    What's in your pantry <br />
                    today?
                  </p>

                  <p>
                    Input your ingredients and let our editorial team <br />
                    suggest the perfect seasonal dish.
                  </p>
                </div>

                <div className=" w-1/3 ">
                  <img
                    className="w-full  h object-contain"
                    src={banner}
                    alt="Banner"
                  />
                </div>
              </div>
              <p className="flex flex-col md:flex-row gap-5 md:gap-10 py-5 md:py-10 px-5 md:px-10">
                <input
                  type="text"
                  className="bg-white w-full md:w-2/3 rounded-xl px-4 py-2"
                  placeholder="Enter ingredients..."
                />
                <button className="rounded-xl bg-mist-950 text-white px-5 py-3 flex gap-3 justify-center items-center w-full md:w-auto">
                  <i className="fa-solid fa-plus text-white"></i>
                  Add ingredients
                </button>
              </p>
            </div>
          </div>
          {/* added ingredients */}
          <p className=" flex items-center justify-between fs-sm">
            <span className=""> Your Ingredients </span>
            <span> 3 Items Added</span>
          </p>
          <p className="py-5 flex gap-2">
            {ingrdients.map((i, index) => (
              <span key={index} className="bg-white rounded-xl px-5 py-3">
                <i class={i.icon}></i>
                {i.name} <i class="fa-solid fa-xmark"></i>
              </span>
            ))}
          </p>
          {/* find recipiecs */}
          <div className="recipe-box rounded-xl secondary-bg flex flex-col md:flex-row gap-0 md:gap-10 justify-evenly items-center  py-10 px-10">
            <div>
              {" "}
              <p className="fs-md  text-white">Ready for the Menu?</p>
              <p className="fs-sm text-mist-950">
                We've found 12 recipes matching your current <br /> pantry
                selection.
              </p>
            </div>
            <div className="flex justify-end items-center  my-0 md:my-10">
              <button className="bg-green-200 rounded-xl px-5 py-3">
                {" "}
                FInd Recipe <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          {/* trending ingredients */}
          <p className=" flex justify-between my-10  fs-sm">
            <span>Trending Ingredients</span>
            <span className="text-green">View All</span>
          </p>
          <div className="indgredient-row flex gap-5 align-center justify-center font-sm">
            {ingredienyData.map((i, index) => (
              <div
                key={index}
                className=" ingredient-card content-bg rounded-xl  p-3 w-auto"
              >
                <div className="img-wrapper">
                  <img src={i.img} alt={i.name} />
                </div>
                <p className="text-center"> {i.name}</p>
                <p className="text-center"> {i.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
