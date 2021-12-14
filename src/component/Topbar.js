import React from 'react';
import SearchView from './views/SearchView';

const Topbar = ({ handleChange, handleSubmit, handlePopup, show }) => {
  return (
    <header className='flex items-center text-gray-600 justify-between'>
      <div className='text-lg'>Orders</div>
      <SearchView handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className='flex gap-4 ' onClick={handlePopup}>
        <p className=' cursor-pointer rounded-xl p-2 '>Add Recipe</p>
        <div className='flex flex-col relative'>
          {' '}
          <p className=' cursor-pointer rounded-xl p-2 pop'>Bookmarks</p>
          {show && (
            <div className='h-40 absolute w-48 right-2 top-10  glass21 rounded-b-2xl px-2'>
              <p>Show My Bookmarks</p>

              <p>Show My Bookmarks</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
