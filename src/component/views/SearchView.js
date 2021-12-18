import React from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

const SearchView = ({ handleChange, handleSubmit, loading }) => {
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
          <button className='App py-2  text-sm px-2 flex gap-2 items-center mx-auto w-24 text-gray-500 transform inline-block hover:scale-110 duration-1000 transition-all'>
            Search
            {!loading ? <FaSearch /> : <FaSpinner className='animate-spin' />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchView;
