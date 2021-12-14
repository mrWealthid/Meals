import React, { useEffect, useState } from 'react';
import { getRecipe } from '../utils/helpers';

import DisplayContent from './DisplayContent';
import Spinner from './Spinner';

const DisplayMeals = ({ id }) => {
  const [recipe, setRecipe] = useState({
    loading: false,
    data: null,
    error: false,
  });

  // '5ed6604591c37cdc054bcd09'

  useEffect(() => {
    (async () => {
      try {
        if (!id) return;

        setRecipe({ loading: true });

        const data = await getRecipe(id);

        const meal = data.data.recipe;

        console.log(meal);
        setRecipe({ loading: false, data: meal });
      } catch (error) {
        setRecipe({ loading: false, data: null, error: true });
      }
    })();
  }, [id]);

  function renderPage(recipe) {
    if (recipe?.loading) {
      return <Spinner />;
    }

    if (recipe?.error) {
      return 'We could not find that recipe. Please try another one!';
    }

    if (!recipe?.data) {
      return 'Start By Typing';
    }
    return <DisplayContent recipe={recipe} />;
  }

  return <>{renderPage(recipe)}</>;
};

export default DisplayMeals;
