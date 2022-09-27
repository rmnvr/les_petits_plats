// ici en premier j'importe donc le fichier contenant toute les recettes.
import { recipes } from "../data/recipes.js";
import displayRecipe from "./utils/displayRecipe.js";
import {openIngredient, openAppareil, openUstens} from "./utils/event.js";
import {displayTag, displayTagAppareil, displayTagUstens} from "./utils/displayTag.js";
import searchRecipe from "./algorithme1/algo.js";
import refresh from "./utils/refresh.js"
// cette fonction affiche toute les recettes, quand on arrive sur le site
// displayRecipe(recipes);

// je vais essayer de faire ce que ma dis le mentor, a savoir, crée un tableau accessible partout, qui va contenir les tags selectionné et effectué la recherche avec ce tableau et recipes du coup bien sur. il faut qu'a chaque ingredient ou appareil ou ustens cliqué il se rajoute ou s'enleve de se tableau.....

export const tagsArray= [];
// console.log(tagsArray);
refresh(recipes)

// ici je recupere les 3 boutons de tri
const btnIngredient = document.querySelector('.search_ingredients');
const btnAppareil = document.querySelector('.search_appareil');
const btnUstens = document.querySelector('.search_ustensiles');
const input = document.querySelector('#search');


//ici ce sont les fonctions qui affiches les tag dans les boutons de tri.
// displayTag(recipes);
// displayTagAppareil(recipes);
// displayTagUstens(recipes);

// ici je leurs met un ecouteur d'évenement qui au clique m'ouvrira les boutons, contenant leurs ingredient etc...

btnIngredient.addEventListener('click', openIngredient);
btnAppareil.addEventListener('click', openAppareil);
btnUstens.addEventListener('click', openUstens);



// ici je met en place l'écouteur d'évenement qui executera ma fonction de recherche.
input.addEventListener('keyup', (e)=>{
    // mettre condition pour commencer la recherche a partir de 3 lettres entrées.
    if(e.target.value.length > 2){
        const newRecipe = searchRecipe(e.target.value, recipes)
        // searchRecipe(e.target.value, recipes)
        refresh(newRecipe)
        // displayRecipe(newRecipe)
        // displayTag(newRecipe)
        // displayTagAppareil(newRecipe)
        // displayTagUstens(newRecipe)
    }
    else{
        refresh(recipes)
        // displayRecipe(recipes)
    }
})

const inputIngredient = document.querySelector('.ingredient_btn');
const inputAppareil = document.querySelector('.appareil_btn');
const inputUstens = document.querySelector('.ustens_btn');
const liIngredient = document.querySelector('.ingredient_item');


inputIngredient.addEventListener('keyup', (e)=>{

    if(e.target.value.length > 2){
        // mettre la fonction de recherche pour sortir les ingredients correspondant.
    }
})
// ici je vais mettre en place l'écouteur d'évenement sur l'input des tags.
