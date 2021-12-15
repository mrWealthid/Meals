import React from 'react';
import SearchView from './views/SearchView';
import { FaUtensils, FaBookmark } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';

const Topbar = ({
  handleChange,
  handleSubmit,

  loading,

  bookmarkRef,
}) => {
  return (
    <header className='flex items-center text-gray-600 p-4 justify-between'>
      <div className='text-lg flex gap-2 items-center'>
        <FaUtensils /> Meals
      </div>
      <SearchView
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <div className='flex gap-4 '>
        <p className=' cursor-pointer flex gap-1 gap-1 items-center rounded-xl p-2 add'>
          <AiOutlineForm />
          Add Recipe
        </p>
        <div className='flex flex-col relative'>
          {' '}
          <p className=' cursor-pointer rounded-xl flex gap-1 items-center p-2 bookmarks'>
            <FaBookmark /> Bookmarks
          </p>
          <div
            className='h-40 absolute w-48 right-2 top-10 hidden  glass21 rounded-b-2xl px-2'
            ref={bookmarkRef}
          >
            <p>Show My Bookmarks</p>

            <p>Show My Bookmarks</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
