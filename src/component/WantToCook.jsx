const WantToCook = ({recipe,  handleCookingButton}) => {
    const {name, preparing_time, calories} = recipe
   
  return (
    <tr className="bg-[#28282808]">
      <th>  </th>
      <td>{name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
      <td>
        <button onClick={() => handleCookingButton(recipe)} className="btn text-white bg-green-500 hover:text-black">
          Preparing
        </button>
      </td>
    </tr>
  );
};

export default WantToCook;
