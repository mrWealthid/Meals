import React, { useState, useEffect } from 'react';

import { getRecipes } from '../component/utils/helpers';
import { useParams } from 'react-router-dom';
import DisplayMeals from './views/DisplayMeals';
import Sidebar from './views/Sidebar';
import Spinner from './views/Spinner';
import { RESULT_PER_PAGE } from './config';

const Home = () => {
  const { id } = useParams();

  const [recipes, setRecipes] = useState({
    loading: false,
    data: [],
    error: false,

    resultPerPage: RESULT_PER_PAGE,
  });

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('pizza');

  useEffect(() => {
    // const API = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza';
    (async () => {
      try {
        setRecipes({
          loading: true,
          data: [],
          error: false,
          resultPerPage: RESULT_PER_PAGE,
        });
        const data = await getRecipes(search);

        const meal = data.data.recipes;

        setRecipes({
          loading: false,
          data: meal,
          error: false,
          resultPerPage: RESULT_PER_PAGE,
        });
        console.log(meal);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [search]);

  function calcPagesNumber(page) {
    const numberOfPages = Math.ceil(
      recipes.data.length / recipes.resultPerPage
    );

    //We are on page One and there are other pages

    if (page === 1 && numberOfPages > 1) {
      return (
        <div className='flex justify-end'>
          <button
            onClick={() => setPage(page + 1)}
            className='bg-green-400 py-2 px-3 text-white rounded'
          >
            Page {page + 1}
          </button>
        </div>
      );
    }

    //last page
    if (page === numberOfPages && numberOfPages > 1) {
      return (
        <div className='flex justify-end'>
          <button
            onClick={() => setPage(page - 1)}
            className='bg-green-400 py-2 px-3 text-white rounded'
          >
            Page {page - 1}
          </button>
        </div>
      );
    }

    //other pages

    if (page < numberOfPages) {
      return (
        <div className='mt-4 flex justify-between'>
          <button
            onClick={() => setPage(page - 1)}
            className='bg-green-400 py-2 px-3 text-white rounded'
          >
            Page {page - 1}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className='bg-green-400 py-2 px-3 text-white rounded'
          >
            Page {page + 1}
          </button>
        </div>
      );
    }

    return '';
  }

  //Pagination features
  //We are on page One and there are other pages
  //We are  on page One and tthere are no other pages

  //last page

  //other pages

  const getSearchResultsPage = function (recipe, page) {
    const start = (page - 1) * recipes.resultPerPage;
    const end = page * 10;

    return recipe.data?.slice(start, end);
  };

  function renderPage(recipe) {
    if (recipe?.loading) {
      return <Spinner />;
    }

    if (recipe?.error) {
      return 'Opps 😢 An Error Occured';
    }

    return getSearchResultsPage(recipe, page)?.map((item) => (
      <Sidebar key={item.id} {...item} />
    ));
  }

  return (
    <div className='bg w-full flex flex-col p-4 rounded-lg'>
      <header className='flex justify-between'>
        <div>Logo</div>
        <div>Search</div>
        <div>Icons</div>
      </header>
      <section className='flex'>
        <section className='bg-white w-1/3 min-h-screen '>
          <> {renderPage(recipes)}</>
          <>{calcPagesNumber(page)}</>
        </section>
        <section className=' w-full flex justify-center min-h-screen items-center '>
          <DisplayMeals id={id} />
        </section>
      </section>
    </div>
  );
};

export default Home;
