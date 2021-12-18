import React, { useEffect, useState } from 'react';
import { getRecipe } from '../utils/helpers';

import DisplayContent from './DisplayContent';
import Spinner from './Spinner';

const DisplayMeals = ({ id, addBookmark, checkBookmark }) => {
  const [recipe, setRecipe] = useState({
    loading: false,
    data: null,
    error: {
      type: false,
      msg: '',
    },
  });

  useEffect(() => {
    (async () => {
      try {
        if (!id) return;

        setRecipe({
          loading: true,
          data: null,
          error: {
            type: false,
            msg: '',
          },
        });
        const data = await getRecipe(id);

        const meal = data.data.recipe;

        console.log(meal);
        setRecipe({ loading: false, data: meal });
      } catch (error) {
        setRecipe({
          loading: false,
          data: null,
          error: {
            type: true,
            msg: error.message,
          },
        });
      }
    })();
  }, [id]);

  function renderPage(recipe) {
    if (recipe?.loading) {
      return <Spinner />;
    }

    if (recipe.error?.type) {
      return (
        <p className='px-2 text-gray-600'>
          {recipe.error.msg ||
            'We could not find that recipe. Please try another one🤔!'}
        </p>
      );
    }

    if (!recipe?.data) {
      return (
        <p className='px-2 text-gray-600'>
          Start by searching for a recipe or an ingredient. Have fun 😃!
        </p>
      );
    }
    return (
      <DisplayContent
        recipe={recipe}
        addBookmark={addBookmark}
        checkBookmark={checkBookmark}
      />
    );
  }

  return <div className='w-full min-h-screen'>{renderPage(recipe)}</div>;
};

export default DisplayMeals;
