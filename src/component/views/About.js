import React, { useEffect, useState } from 'react';
import { getRecipe } from '../utils/helpers';

import Spinner from '../images/Spinner.svg';
import AboutContent from './AboutContent';

const About = ({ id }) => {
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
      return <img src={Spinner} alt='spinner' className='w-12 h-12' />;
    }

    if (recipe?.error) {
      return 'Opps 😢 An Error Occured';
    }
    return <AboutContent recipe={recipe} />;
  }

  return <>{renderPage(recipe)}</>;
};

export default About;
