import React from 'react';
import { NavLink } from 'react-router-dom';

const Bookmarks = ({ title, id, image_url: img }) => {
  const styles = {
    color: 'grey',
    background: ' #fbdb89',
    // width: '100%',
  };
  return (
    <div className=' hover:bg-gray-200 flex items-center gap-2'>
      <img
        className=' w-8 h-8 object-cover items-center flex justify-center cursor-pointer rounded-full overflow-hidden App'
        src={img}
        alt={title}
      />

      <NavLink
        activeStyle={styles}
        to={`/${id}`}
        exact
        className='p-2 py-3 block'
      >
        <p className='text-xs'>{title.split('(')[0]}</p>
      </NavLink>
    </div>
  );
};

export default Bookmarks;
