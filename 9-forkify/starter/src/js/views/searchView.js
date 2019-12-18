import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResList = () => {
    elements.searchResList.innerHTML = '';
};

const limitRecipeTitle = (title,limit = 17) => {
    if(title.length > limit){
        const newTitle = [];
        title.split(' ').reduce((acc,cur)=>{
            if(acc + cur.length <= limit){
                newTitle.push(cur); 
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    }
    return title;
};

const renderRecipe = recipe => {
    const markup = `
    <li id="${recipe.id}">
        <a class="results__link" href="#${recipe.id}">
            <figure class="results__fig">
                <img src="https://spoonacular.com/recipeImages/${recipe.image}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.readyInMinutes} Mins</p>
            </div>
        </a>
    </li>`;
    
    elements.searchResList.insertAdjacentHTML('beforeend',markup);
}

export const renderResults = recipes => {
    console.log(recipes);
    recipes.forEach(renderRecipe);
}