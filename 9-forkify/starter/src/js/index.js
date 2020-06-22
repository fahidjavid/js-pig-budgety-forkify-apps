import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements, renderLoader, clearLoader} from './views/base';

/** Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/

const state = {};

/**
 * Search Controller
 */
async function controlSearch() {
    // 1. Get search query
    const query = searchView.getInput();

    if(query){
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for the results
        searchView.clearInput();
        searchView.clearResList();
        renderLoader(elements.searchRes);

        try {
			// 4. Search for recipies
			await state.search.getResults();

			// Render results on UI
			clearLoader();
			searchView.renderResults(state.search.result);  
		}  catch (err) {
			alert('Something wrong with the search...');
			clearLoader();
		}
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResList();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }
});


/**
 * Recipe Controller
 */
const controlRecipe = async () => {
	// Get ID from url
	const id = window.location.hash.replace('#', '');
	console.log('Id is ' + id);

	if (id) {
		// Prepare UI for changes
		recipeView.clearRecipe();
		renderLoader(elements.recipe);

		// Highlight selected search item
		if (state.search) searchView.highlightSelected(id);

		// Create new recipe object
		state.recipe = new Recipe(id);

		try {
			// Get recipe data
			await state.recipe.getRecipe();

			// Render recipe
			clearLoader();
			recipeView.renderRecipe(state.recipe);
		} catch {
			alert('Error processing recipe!');
		}
	}
}

['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipe));

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
	if (e.target.matches('.btn-descrease, .btn-decrease *')) {
		// Decrease button is clicked.
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}
	} else if (e.target.matches('.btn-increase, .btn-increase *')) {
		// Increase button is clicked.
		state.recipe.updateServings('inc');
		recipeView.updateServingsIngredients(state.recipe);
	}
});