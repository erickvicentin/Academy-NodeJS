import Search from './models/Search';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes **/

const state = {};

const DOMstrings = {
  search_btn: '.search',
};

const controlSearch = async () => {
  // 1) GET query from view
  const query = 'pizza'; //TODO

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare the UI for results

    // 4) Search for recipes
    await state.search.getResults();

    // 5) Render results on UI
    console.log(state.search.result);
  }
};

document
  .querySelector(DOMstrings.search_btn)
  .addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
  });
