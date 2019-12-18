import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/** Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/

const state = {};

async function controlSearch() {
    // 1. Get search query
    const query = searchView.getInput();

    if(query){
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for the results
        searchView.clearInput();
        searchView.clearResList();

        // 4. Search for recipies
        await state.search.getResults();

        // Render results on UI
        searchView.renderResults(state.search.result);    
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const result = new Search('cheese&number=2');
result.getResults();

// API URL: https://api.spoonacular.com/recipes/search?query=cheese&number=2
// apiKey: c25b91d186fe47a5abd96993b2789c07
