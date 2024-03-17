import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import WantToCook from "./WantToCook";
import Cooking from "./Cooking";

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.error("Problem occured in fetching data......");
      }
    })();
  }, []);

  const [serial, setSerial] = useState(0)
  const [cook, setCook] = useState([])
  const [isDuplicate, setIsDuplicate] = useState(false)
  
  const handleCookButton = (recipe) => {

    const isDuplicateItem = cook.some(item => item.id === recipe.id);
    if (isDuplicateItem) {
      setIsDuplicate(true)
      setTimeout(() => setIsDuplicate(false), 1000)
      return
    }

    setCook([...cook, recipe])
    setSerial(serial + 1)
  }

  const [cooking, setCooking] = useState([])
  const [min, setMin] = useState(0)
  const [calorie, setCalorie] = useState(0)
  const [serialForCooking, setSerialForCooking] = useState(0)

  const handleCookingButton = (recipe) => {
  
    const updatedRecipe = cook.filter((oldRecipe) => oldRecipe.id !== recipe.id)
    setCook(updatedRecipe)
    
    if (serial > 0) {
        setCooking([...cooking, recipe])
        setSerial(serial - 1);
        setSerialForCooking(serialForCooking + 1);
        setMin(min + recipe.preparing_time)
        setCalorie(calorie + recipe.calories)
      }
    
  }
  return (
    <section>
      <div className="my-10 space-y-2">
        <h1 className="text-3xl font-bold text-center">Our Recipes</h1>
        <p className=" w-2/4 text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <section className=" mx-20 flex ">
        <section className="w-[60%] grid grid-cols-2 gap-5">
          {recipe.map((eachRecipe, index = 1) => (
            <Recipe key={index} recipe={eachRecipe} handleCookButton={handleCookButton}></Recipe>
          ))}
        </section>
        <section className="w-[45%] border ml-10 rounded-lg h-[500px] sticky top-0">
          <div>
            <h1 className="text-2xl text-center py-3 font-semibold">
              Want to cook: {serial}{" "}
            </h1>
          </div>
          <div>
            <hr />
          </div>
          <div className="">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                    cook.map((eachRecipe,index) => <WantToCook key={index} recipe={eachRecipe} serial={serial} handleCookingButton={handleCookingButton}></WantToCook>)
                }
              </tbody>
            </table>
          </div>
          <section>
            <div className="mx-10 mt-7">
              <hr />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-center py-3 ">
                Currently cooking: {serialForCooking}{" "}
              </h1>
            </div>
            <div className="mx-10 ">
              <hr />
            </div>
            <div>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className="font-bold">Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {
                     cooking.map((eachRecipe, index) => <Cooking key={index} recipe={eachRecipe}></Cooking>)
                  }
                  <tr className="bg-[#28282808]">
                    <th></th>
                    <td></td>
                    <td>Total Time = {min} minute</td>
                    <td>Total Calories = {calorie} calories</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </section>
      {
        isDuplicate && <div>
              <div className="alert alert-info toast toast-top w-[20%] bg-red-600 text-white">
                 <span>Duplicate item! Please choose another.</span>
              </div>
        </div>
      }
    </section>
  );
};

export default Recipes;
