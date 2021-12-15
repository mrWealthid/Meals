import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ id, title }) => {
  const styles = {
    color: 'grey',
    // background: ' #fbdb89',
  };
  return (
    <>
      <NavLink
        activeStyle={styles}
        to={`/${id}`}
        className='py-2 px-2 block text-gray-800 animate-slideIn hover:bg-yellow-100'
      >
        {title}
      </NavLink>
    </>
  );
};

export default Sidebar;
