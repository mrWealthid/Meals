import React from 'react';
import SearchView from './views/SearchView';
import { FaUtensils, FaBookmark } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';
import Bookmarks from './views/Bookmarks';

const Topbar = ({
  handleChange,
  handleSubmit,
  bookmark,
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
            className={`${
              bookmark.length > 4 ? 'h-auto' : ' h-48'
            } absolute w-52 right-2 top-10 hidden glass221 animate-slideIn`}
            ref={bookmarkRef}
          >
            {!bookmark.length > 0 ? (
              <p className='p-2 text-xs'>You Have No Bookmark🤔!</p>
            ) : (
              bookmark.map((book) => <Bookmarks key={book.id} {...book} />)
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
