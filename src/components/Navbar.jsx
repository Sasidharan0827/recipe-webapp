function Navbar() {
  const title = "Chief Claude";

  const menus = [
    { value: "Explore" },
    { value: "Planned" },
    { value: "Saved" },
  ];
  return (
    <>
      <nav className="flex py-5 px-20 content-bg items-center justify-between">
        <div className=" flex justify-start text-green fs-md font-1 gap-10 ">
          {" "}
          {title}
        </div>
        <div className=" flex justify-end  items-center fs-xs font-2">
          <p className="flex items-center gap-6 m-0 m-0 px-5 cursor-pointer">
            {menus.map((m, index) => (
              <span key={index} className=" text-black ">
                {m.value}
              </span>
            ))}
          </p>
          <i class="fa-regular fa-circle-user fs-md text-green"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
