import React, { useState } from 'react';
import { FaCheck, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

import { BiBookmarkAltPlus } from 'react-icons/bi';

import { MdBookmarkAdded } from 'react-icons/md';

const DisplayContent = ({ recipe, addBookmark, checkBookmark }) => {
  const [increase, setIncrease] = useState(0);

  const [quant, setQuant] = useState(1);

  console.log(recipe);
  return (
    <section className='text-gray-600'>
      <div className='w-full flex flex-col pb-3 gap-8'>
        <img
          className='w-full h-96 object-cover'
          src={recipe?.data?.image_url}
          alt={recipe?.title}
        />
        <p className='-mt-14 glass221 w-2/6 mx-auto text-center rounded-lg p-2 text-2xl capitalize '>
          {recipe?.data.title}
        </p>

        <div className='flex gap-4 items-center justify-around'>
          <p>Time: {recipe?.data.cooking_time} minutes</p>
          <div className='flex gap-4 items-center'>
            <p>Servings: {recipe?.data.servings + increase} </p>
            <div className='items-center rounded-2xl justify-center gap-5 p-1 cursor-pointer  flex App'>
              <p
                onClick={() => {
                  setIncrease(increase + 1);

                  setQuant(
                    (recipe?.data.servings + increase + 1) /
                      recipe?.data.servings
                  );
                  console.log('test');
                }}
              >
                {' '}
                <FaPlusCircle className='glass22' />
              </p>
              <p
                onClick={() => {
                  setIncrease(
                    recipe?.data.servings + increase > 0 && increase - 1
                  );

                  setQuant(
                    (recipe?.data.servings + increase - 1) /
                      recipe?.data.servings
                  );
                }}
              >
                {' '}
                <FaMinusCircle className='glass22' />
              </p>
            </div>
          </div>
          <div
            className=' w-8 h-8 object-cover items-center flex justify-center cursor-pointer rounded-full App'
            onClick={() => addBookmark(recipe.data.id)}
          >
            {checkBookmark(recipe.data.id) ? (
              <MdBookmarkAdded />
            ) : (
              <BiBookmarkAltPlus />
            )}
          </div>
        </div>
      </div>

      {/* <p className='text-left'>{recipe?.data?.title}</p>
      <p className='text-left'>{recipe?.data?.publisher}</p> */}

      <section className=' glass21 pt-4'>
        <p className='text-xl'>Recipe Description</p>
        <div className='grid  px-2 grid-cols-2 gap-2  my-10'>
          {recipe?.data.ingredients.map((ing, index) => (
            <div
              className='flex gap-1 text-sm items-center text-gray-600 '
              key={index}
            >
              <FaCheck className='glass22' />
              <p>
                {ing.quantity * quant} {ing.unit}
                {''} {ing.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default DisplayContent;
