import  factoryRecipe  from "../factories/indexFactorie.js";
// ici je crée une fonction qui va m'afficher les cards crée dans ma factory que j'appel sur la page index.js

export default function displayRecipe(recipes){
    recipes.forEach(element => {
        const factorie = factoryRecipe(element);
        const contentRecetteCard = document.querySelector('.recette_card');
        contentRecetteCard.appendChild(factorie);
    });
}