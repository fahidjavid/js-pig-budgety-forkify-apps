import Search from './models/Search'

/** Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/

const state = {};

async function controlSearch() {
    // 1. Get search query
    const query = 'pizza';

    if(query){
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for the results

        // 4. Search for recipies
        await state.search.getResults();

        // Render results on UI
        console.log(state.search.result);     
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const result = new Search('cheese&number=2');
result.getResults();

// API URL: https://api.spoonacular.com/recipes/search?query=cheese&number=2
// apiKey: c25b91d186fe47a5abd96993b2789c07
