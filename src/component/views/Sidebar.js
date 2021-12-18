import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ id, title, image_url: img }) => {
  const styles = {
    color: 'grey',
    background: ' #fbdb89',
    width: '100%',
  };
  return (
    <section className='flex flex-1 gap-2 hover:bg-gray-100'>
      <>
        <img
          className=' w-8 h-8 object-cover items-center flex justify-center cursor-pointer rounded-full overflow-hidden App'
          src={img}
          alt={title}
        />
      </>
      <NavLink
        activeStyle={styles}
        to={`/${id}`}
        className=' block text-gray-800 animate-slideIn text-sm '
      >
        <p className='py-3 px-2'> {title.split('(')[0]}</p>
      </NavLink>
    </section>
  );
};

export default Sidebar;
