import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const key = 'c25b91d186fe47a5abd96993b2789c07';

        try{
            const res = await axios(`https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${this.query}&number=30`);
            this.result = res.data.results;
            // console.log(this.result);
        } catch(error){
            alert(error);
        }
    }
}