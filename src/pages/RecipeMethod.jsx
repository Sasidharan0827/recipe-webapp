import React from "react";
import hero from "../assets/img/Main Recipe Hero.png";
function RecipeMethod() {
  const recipeTile = "Heirloom Tomato & Burrata Summer Platter";
  const avliabity = [
    {
      isaval: true,
      name: "4 Large Heirloom Tomatoes",
    },
    {
      isaval: true,
      name: "2 Balls Fresh Burrata Cheese",
    },
    {
      isaval: true,
      name: "Fresh Basil Leaves",
    },
    {
      isaval: true,
      name: "High Quality Extra Virgin Olive Oil",
    },
    {
      isaval: true,
      name: "Aged Balsamic Glaze",
    },
  ];
  const recipeSteps = [
    {
      step: 1,
      description: "Prepare the procedure",
      details:
        "Wash the heirloom tomatoes thoroughly and pat dry. Using a sharp serrated knife, slice them into varying thicknesses (1/4 to 1/2 inch) to create visual interest. Arrange them on a large wooden board or a ceramic serving platter, overlapping them slightly.",
    },
    {
      step: 2,
      description: "Prepare the procedure",
      details:
        "Wash the heirloom tomatoes thoroughly and pat dry. Using a sharp serrated knife, slice them into varying thicknesses (1/4 to 1/2 inch) to create visual interest. Arrange them on a large wooden board or a ceramic serving platter, overlapping them slightly.",
    },
    {
      step: 3,
      description: "Prepare the procedure",
      details:
        "Wash the heirloom tomatoes thoroughly and pat dry. Using a sharp serrated knife, slice them into varying thicknesses (1/4 to 1/2 inch) to create visual interest. Arrange them on a large wooden board or a ceramic serving platter, overlapping them slightly.",
    },
    {
      step: 4,
      description: "Prepare the procedure",
      details:
        "Wash the heirloom tomatoes thoroughly and pat dry. Using a sharp serrated knife, slice them into varying thicknesses (1/4 to 1/2 inch) to create visual interest. Arrange them on a large wooden board or a ceramic serving platter, overlapping them slightly.",
    },
  ];
  const data = [
    {
      time: "25 mins",
      difficulty: "Easy",
      no_servings: "20 Servings",
    },
  ];
  return (
    <section className="py-10">
      <div className="container">
        <div className="hero-container relative">
          <img src={hero} alt="" className="" />
          <div className="text-white absolute bottom-5 left-5">
            <p className="flex gap-5 ">
              <span className=" px-5 py-2 secondary-bg rounded-xl">
                {" "}
                MAIN COURSE
              </span>
              <span className=" px-5 py-2 bg-orange rounded-xl">
                CHEF'S CHOICE
              </span>
            </p>
            <p className="fs-md">{recipeTile}</p>
            <p className="fs-xs flex gap-5">
              <span className="fw-bold">
                <i className=" text-orange fa-regular fa-clock"></i>
                {data[0].time}
              </span>
              <span className="fw-bold">
                <i className=" text-orange fa-regular fa-star"></i>
                {data[0].difficulty}
              </span>
              <span className="fw-bold">
                <i className="text-orange fa-solid fa-user-group"></i>
                {data[0].no_servings}
              </span>
            </p>
          </div>
        </div>
        {/* recipe steps */}
        <div className="flex flex-col md:flex-row  gap-2 md:gap-10 py-5">
          <div className=" content-bg rounded-xl px-0 md:px-5 py-3">
            <p className="flex w-100 justify-between items-center">
              <span className="fs-md  text-green">Ingredients</span>
              <sapn> 8 items </sapn>
            </p>
            {avliabity.map((a, index) => (
              <div
                className="flex items-center bg-white rounded-xl px-5 py-3  my-2"
                key={index}
              >
                <input type="checkbox" className="h-4 w-4 border-black mr-2" />
                <label>{a.name}</label>
              </div>
            ))}
          </div>
          {/* the method */}
          <div className="flex-2">
            <p className=" fs-md  font-1"> The method</p>
            <hr />
            {recipeSteps.map((s, index) => (
              <div className="recipeSteps py-5" key={index}>
                <p className=" flex  gap-2">
                  <span className=" secondary-bg text-white rounded-full px-5 py-3 font-1">
                    {s.step}
                  </span>
                  <sapn className="fs-sm fw-bold-400 text-green">
                    {s.description}
                  </sapn>
                </p>

                <p className="fs-xs">{s.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecipeMethod;
