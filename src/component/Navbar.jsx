import React from "react";

const navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className=" font-bold text-2xl"><span className="text-4xl text-green-400">R</span>ecipe Calories</a>
        </div>
        <div>
          <ul className="flex mr-10 space-x-4 font-bold">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Recipes</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Search</li>
          </ul>
        </div>
        <div className="mr-7">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto  " />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-14 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
