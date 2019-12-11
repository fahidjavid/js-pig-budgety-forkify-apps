import axios from 'axios';
async function getResults(getResults){
    const key = 'c25b91d186fe47a5abd96993b2789c07';
    const res = await axios(`https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=${key}`);
    console.log(res);
}

getResults();

// API URL: https://api.spoonacular.com/recipes/search?query=cheese&number=2
// apiKey: c25b91d186fe47a5abd96993b2789c07