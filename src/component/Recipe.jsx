import React, { useState } from 'react';
import { IoMdTime } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";

const Recipe = ({recipe, handleCookButton}) => {
    const {image, name, short_description, ingredients, preparing_time, calories} = recipe

    return (
        <section className='border rounded-2xl'>   
            <div>
                <img className='w-[100%] mx-auto rounded-t-2xl' src={image} alt="" />
            </div>
            <div className='space-y-2 p-3'>
            <h1 className='text-xl font-bold'> {name} </h1>
            <p> {short_description} </p>
            <h5 className='font-bold'> Ingredients: {ingredients.length} </h5>
            <ol className=' list-disc'>
                {
                    ingredients.map((eachIngredient, index=1) => <li className='ml-7' key={index}>{eachIngredient}</li>)
                }
            </ol>
            <div className='flex space-x-8'>
                <div className='flex space-x-1 items-center'>
                    <IoMdTime />
                    <p>{preparing_time}</p>
                </div>
                <div className='flex space-x-1 items-center'>
                    <FaFireAlt />
                    <p>{calories}</p>
                </div>
            </div>
            <div><button onClick={() => {handleCookButton(recipe)}} className='btn text-white bg-green-500 hover:text-black'>Want to cook</button></div>
            </div>
        </section>
    );
};

export default Recipe;