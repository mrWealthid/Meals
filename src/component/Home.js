import React, { useState, useEffect, useRef } from 'react';

import { getRecipes } from '../component/utils/helpers';
import { useParams } from 'react-router-dom';
import DisplayMeals from './views/DisplayMeals';
import Sidebar from './views/Sidebar';
import Spinner from './views/Spinner';
import { RESULT_PER_PAGE, START_PAGE } from './config';

import Topbar from './Topbar';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
const Home = () => {
  // const history = useHistory();

  const { id } = useParams();

  // useEffect(() => {
  //   history.push('/');
  // }, [history]);

  const [bookmark, setBookmark] = useState([]);

  const [recipes, setRecipes] = useState({
    loading: false,
    data: [],
    error: { type: false, msg: '' },

    resultPerPage: RESULT_PER_PAGE,
  });

  const [page, setPage] = useState(START_PAGE);
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');

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
            className='App py-1 px-3 text-white flex gap-1 items-center rounded-xl'
          >
            Page {page + 1}
            <AiOutlineArrowRight />
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
            className='App py-1 px-3 flex gap-1 items-center text-white rounded-xl'
          >
            <AiOutlineArrowLeft />
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
            className='App py-1 px-3 text-white rounded-xl flex gap-1 items-center'
          >
            <AiOutlineArrowLeft />
            Page {page - 1}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className='App py-1 px-3 text-white rounded-xl flex gap-1 items-center'
          >
            Page {page + 1}
            <AiOutlineArrowRight />
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
      return (
        <p className='px-2'>
          {recipe.error.msg || 'Oooops An Error Occured! Please try again'}
        </p>
      );
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

  const addRef = useRef();

  const bookmarkRef = useRef();

  const handleClicks = (e) => {
    if (e.target.classList.contains('add')) {
      addRef.current.classList.toggle('hidden');
    }

    if (e.target.classList.contains('bookmarks')) {
      bookmarkRef.current.classList.toggle('hidden');
    }

    if (!e.target.classList.contains('add')) {
      addRef.current.classList.add('hidden');
    }

    if (!e.target.classList.contains('bookmarks')) {
      bookmarkRef.current.classList.add('hidden');
    }
  };

  const addBookmark = (id) => {
    console.log(id);

    // setRecipes({...recipes, data:recipes.data.map((el)=> el.id === id ? {...el,  bookmarked: true}: el) })
    const newBookmark = recipes.data.find((el) => el.id === id);
    console.log(bookmark);

    setBookmark([...bookmark, newBookmark]);
  };

  const checkBookmark = (id) => {
    return bookmark.some((booked) => booked.id === id);
  };

  //using local Storage to save bookmarks

  useEffect(() => {
    let FetchBookmarks = localStorage.getItem('Bookmarks');
    if (FetchBookmarks) {
      FetchBookmarks = JSON.parse(FetchBookmarks);

      setBookmark(FetchBookmarks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Bookmarks', JSON.stringify(bookmark));
  }, [bookmark]);

  return (
    <div
      className='glass21 w-11/12 flex flex-col relative rounded-lg'
      onClick={handleClicks}
    >
      <Topbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={recipes.loading}
        bookmarkRef={bookmarkRef}
        bookmark={bookmark}
      />
      <section className='flex'>
        <section className='glass21 w-2/5 min-h-screen py-3 rounded-2xl'>
          <> {renderPage(recipes)}</>
          <>{calcPagesNumber(page)}</>
        </section>
        <section className='flex w-full min-h-screen '>
          <DisplayMeals
            id={id}
            addBookmark={addBookmark}
            checkBookmark={checkBookmark}
          />
        </section>
      </section>

      <div
        className='h-80 w-6/12 glass221 absolute hidden animate-slideIn left-80 top-32  '
        ref={addRef}
      >
        {' '}
        Modal{' '}
      </div>
    </div>
  );
};

export default Home;
