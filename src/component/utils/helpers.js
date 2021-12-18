import axios from 'axios';
import { API_URL, TIMEOUT_SEC } from '../config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const getRecipe = async (id) => {
  //   const resp = await axios(`${API_URL}${id}`);

  //This throws a rejection if it takes too Long to Load.
  try {
    const resp = await Promise.race([
      axios(`${API_URL}/${id}`),
      timeout(TIMEOUT_SEC),
    ]);

    const data = await resp.data;

    return data;
  } catch (err) {
    throw err;
  }
};

const getRecipes = async (search) => {
  try {
    const resp = await Promise.race([
      axios(`${API_URL}?search=${search}`),
      timeout(TIMEOUT_SEC),
    ]);

    const data = await resp.data;

    // if (!data || (Array.isArray(data) && data.length === 0))

    if (data.results < 1) {
      throw new Error('Recipe Not Found! Please try again ;)');
    } else return data;
  } catch (err) {
    throw err;
  }
  //   const resp = await axios(`${API_URL}?search=${search}`);
};
export { getRecipe, getRecipes };
