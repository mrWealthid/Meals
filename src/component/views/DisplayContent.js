import React from 'react';

const DisplayContent = ({ recipe }) => {
  return (
    <section className='w-full'>
      <p>{recipe?.data?.title}</p>
      <p>{recipe?.data?.publisher}</p>
      <div className='w-8/12 mx-auto'>
        {' '}
        {/* <img
          className='w-full'
          src={recipe?.data?.image_url}
          alt={recipe?.title}
        /> */}
      </div>
    </section>
  );
};

export default DisplayContent;
