import React from "react";
import Li from "./Li";


const Sidebar = () => {
  return (
    <div className="w-auto h-auto flex-none mt-4 ">
      <h3 className="my-4 px-5">Shop by Category</h3>
      <Li/>
    </div>
  );
};

export default Sidebar;
