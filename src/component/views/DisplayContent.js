import React from 'react';

const DisplayContent = ({ recipe }) => {
  return (
    <section>
      <div className='w-full'>
        <img
          className='w-full h-96  object-cover'
          src={recipe?.data?.image_url}
          alt={recipe?.title}
        />
      </div>

      <p className='text-left'>{recipe?.data?.title}</p>
      <p className='text-left'>{recipe?.data?.publisher}</p>
    </section>
  );
};

export default DisplayContent;
