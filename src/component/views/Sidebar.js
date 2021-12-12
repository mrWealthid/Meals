import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ id, title }) => {
  return (
    <>
      <Link to={`/${id}`}>
        {' '}
        <p>{title}</p>
      </Link>
    </>
  );
};

export default Sidebar;
