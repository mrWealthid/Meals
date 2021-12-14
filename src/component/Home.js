import React, { useState, useEffect } from 'react';

import { getRecipes } from '../component/utils/helpers';
import { useParams } from 'react-router-dom';
import DisplayMeals from './views/DisplayMeals';
import Sidebar from './views/Sidebar';
import Spinner from './views/Spinner';
import { RESULT_PER_PAGE } from './config';

import Topbar from './Topbar';

const Home = () => {
  const { id } = useParams();

  const [recipes, setRecipes] = useState({
    loading: false,
    data: [],
    error: { type: false, msg: '' },

    resultPerPage: RESULT_PER_PAGE,
  });

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    // const API = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza';
    (async () => {
      try {
        if (!search) return false;
        setRecipes({
          loading: true,
          data: [],
          error: { type: false, msg: '' },
          resultPerPage: RESULT_PER_PAGE,
        });

        const data = await getRecipes(search);

        const meal = data.data.recipes;

        setRecipes({
          loading: false,
          data: meal,
          error: { type: false, msg: '' },
          resultPerPage: RESULT_PER_PAGE,
        });
        console.log(meal);
      } catch (err) {
        console.log(err.message);
        setRecipes({
          loading: false,
          data: [],
          error: { type: true, msg: err.message },
          resultPerPage: RESULT_PER_PAGE,
        });
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
        <div className='flex mt-8 px-4 justify-end'>
          <button
            onClick={() => setPage(page + 1)}
            className='btn py-2 px-3 text-white rounded-xl'
          >
            Page {page + 1}
          </button>
        </div>
      );
    }

    //last page
    if (page === numberOfPages && numberOfPages > 1) {
      return (
        <div className='flex mt-8 justify-end px-4'>
          <button
            onClick={() => setPage(page - 1)}
            className='btn py-2 px-3 text-white rounded-xl'
          >
            Page {page - 1}
          </button>
        </div>
      );
    }

    //other pages

    if (page < numberOfPages) {
      return (
        <div className='mt-8 flex justify-between px-4'>
          <button
            onClick={() => setPage(page - 1)}
            className='btn py-2 px-3 text-white rounded-xl'
          >
            Page {page - 1}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className='btn py-2 px-3 text-white rounded-xl'
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
  //We are  on page One and there are no other pages

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

    if (recipe?.error.type) {
      return recipe.error.msg || 'Oooops An Error Occured! Please try again ;)';
    }

    return getSearchResultsPage(recipe, page)?.map((item) => (
      <Sidebar key={item.id} {...item} />
    ));
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return;
    setSearch(input);
  }

  const handlePopup = (e) => {
    console.log(e.target.classList.contains('pop'));
    if (e.target.classList.contains('pop')) {
      setShow(true);
    }
    if (!e.target.classList.contains('pop')) {
      setShow(false);
    }
  };
  return (
    <div
      className='glass21 w-full flex flex-col p-4 rounded-lg'
      onClick={handlePopup}
    >
      <Topbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handlePopup={handlePopup}
        show={show}
      />
      <section className='flex'>
        <section className='glass21 w-2/5 min-h-screen pt-3 rounded-2xl'>
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
