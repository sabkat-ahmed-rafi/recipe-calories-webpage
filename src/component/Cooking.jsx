import React from "react";

const Cooking = ({recipe}) => {
    const {name, preparing_time, calories} = recipe
  return (
    <tr className="bg-[#28282808]">
      <th></th>
      <td>{name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
      <td></td>
    </tr>
  );
};

export default Cooking;
