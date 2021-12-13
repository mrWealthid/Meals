import React from 'react';
import Spinners from '../images/Spinner.svg';

const Spinner = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <img src={Spinners} alt='spinner' className='w-12 h-12' />
    </div>
  );
};

export default Spinner;
