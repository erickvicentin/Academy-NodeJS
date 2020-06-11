import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';
import Search from './models/Search';
import * as recipeView from './views/recipeView';
import * as searchView from './views/searchView';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes **/

const state = {};

/*********************************
 * SEARCH CONTROLLER
 ********************************/

const controlSearch = async () => {
  // 1) GET query from view
  const query = searchView.getInput();

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare the UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      // 4) Search for recipes
      await state.search.getResults();

      // 5) Render results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (err) {
      console.log('Algo salió mal en la busqueda...');
      clearLoader();
    }
  }
};

/*********************************
 * RECIPE CONTROLLER
 ********************************/
const controlRecipe = async () => {
  const id = window.location.hash.replace('#', '');
  console.log(id);

  if (id) {
    //prepare UI for changes

    // create new recipe object and add to state
    state.recipe = new Recipe(id);

    try {
      // get recipe data and parse ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // calculate servings and time
      const time = state.recipe.calcTime();
      const servings = state.recipe.calcServings();

      // render recipe
    } catch (err) {
      console.log('Error procesando la receta');
    }
  }
};

/**********************************
 * EVENTS LISTENERS
 **********************************/

['hashchange', 'load'].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);

elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});
