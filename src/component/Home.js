import React, { useState, useEffect } from 'react';
import About from './views/About';
import { getRecipes } from '../component/utils/helpers';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('pizza');

  useEffect(() => {
    // const API = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza';
    (async () => {
      try {
        const data = await getRecipes(search);

        const meal = data.data.recipes;

        setRecipes(meal);
        console.log(meal);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [search]);

  return (
    <div className='bg w-full flex flex-col p-4 rounded-lg'>
      <header className='flex justify-between'>
        <div>Logo</div>
        <div>Search</div>
        <div>Icons</div>
      </header>
      <section className='flex'>
        <section className='bg-white w-1/3 h-screen '>
          {recipes.slice(0, 10).map((item) => (
            <div key={item.id}>
              <Link to={`/${item.id}`}>
                {' '}
                <p>{item.title}</p>
              </Link>
            </div>
          ))}
        </section>
        <section className=' w-full flex justify-center min-h-screen items-center '>
          <About id={id} />
        </section>
      </section>
    </div>
  );
};

export default Home;
