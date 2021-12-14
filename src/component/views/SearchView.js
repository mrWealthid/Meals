import React from 'react';

const SearchView = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=' flex items-center overflow-hidden  border border-gray-50 justify-center rounded-l-xl rounded-r-2xl'>
          {' '}
          <input
            type='text'
            className=' px-3 py-2 rounded-l bg-transparent text-sm text-gray-600 focus:bg-transparent  border-gray-300 focus:ring-0  focus:border-none border-0 border-r-0'
            onChange={handleChange}
            placeholder='Search over 1,000,000 recipes...'
          />
          <button className='btn py-2  text-sm px-2 w-20 text-white transform inline-block hover:scale-110 duration-1000 transition-all'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchView;
