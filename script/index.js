// ici en premier j'importe donc le fichier contenant toute les recettes.
import { recipes } from "../data/recipes.js";
import displayRecipe from "./utils/displayRecipe.js";
import {openIngredient, openAppareil, openUstens} from "./utils/event.js";
import {displayTag, displayTagAppareil, displayTagUstens} from "./utils/displayTag.js";
import searchRecipe from "./algorithme1/algo.js";
// import btnTriIngredient from "./factories/ingredientContainer.js"
import {allTags} from "./factories/tagContainer.js"


// cette fonction affiche toute les recettes, quand on arrive sur le site
displayRecipe(recipes);

// ici je recupere les 3 boutons de tri
const btnIngredient = document.querySelector('.search_ingredients');
const btnAppareil = document.querySelector('.search_appareil');
const btnUstens = document.querySelector('.search_ustensiles');
const input = document.querySelector('#search');


//ici ce sont les fonctions qui affiches les tag dans les boutons de tri.
displayTag(recipes);
displayTagAppareil(recipes);
displayTagUstens(recipes);

// ici je leurs met un ecouteur d'évenement qui au clique m'ouvrira les boutons, contenant leurs ingredient etc...

btnIngredient.addEventListener('click', openIngredient);
btnAppareil.addEventListener('click', openAppareil);
btnUstens.addEventListener('click', openUstens);



// ici je met en place l'écouteur d'évenement qui executera ma fonction de recherche.
input.addEventListener('keyup', (e)=>{
    // mettre condition pour commencer la recherche a partir de 3 lettres entrées.
    if(e.target.value.length > 2){
        searchRecipe(e.target.value, recipes)
    }
    else{
        displayRecipe(recipes)
    }
})

// ici je vais mettre en place l'écouteur d'évenement pour géré les tags
// const ingredient_item = document.querySelectorAll('.ingredient_item');
// console.log(ingredient_item);

// ingredient_item.forEach(element =>{
//     element.addEventListener('click', ()=>{
//         console.log();
//     })
// })

allTags(recipes)