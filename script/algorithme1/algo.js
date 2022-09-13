// ici je vais commencer a mettre mon algorithme en place.
import displayRecipe from "../utils/displayRecipe.js";
import {displayTag, displayTagAppareil, displayTagUstens} from "../utils/displayTag.js";

export default function searchRecipe(lettre, recipes){
    // alors ici, je met en place une constante, qui contient mes conditions(qui filtre le resultat de la recherche et va chercher dans le tableau les element correspondant), et retourne les recettes correspondante a la valeur de l'input. je met des || (ou) pour tout comparer directement.

    const recipesFiltre = recipes.filter((recipe) => recipe.name.toLowerCase().includes(lettre) || recipe.description.toLowerCase().includes(lettre) ||
    recipe.ingredients.some((ingObj) => {
     ingObj.ingredient.toLowerCase().includes(lettre)
    }) )

    const containCards = document.querySelector('.recette_card');
    const containIngredient = document.querySelector('.ingredient');
    const containAppareil = document.querySelector('.appareil');
    const containUstens = document.querySelector('.ustens');
    // ma constante mise en place, maintenant je dois faire en sorte d'effacer toute les cards, et re afficher uniquement celle correspondante a la recette.

    containCards.innerHTML= "";
    // je fais pareil avec les boutons contenant les tags. (je ne sais pas si je fais bien les choses sur ce point la)
    containIngredient.innerHTML="";
    containAppareil.innerHTML="";
    containUstens.innerHTML="";
    // ensuite il faut que je rappelle ma fonction me permettant d'afficher les recettes, et de lui passer mon nouveau tableau qui correspond a la recherche de l'user.
    displayRecipe(recipesFiltre);
    // il faut que je fasse pareil avec les boutons contenant les tags. 
    displayTag(recipesFiltre);
    displayTagAppareil(recipesFiltre);
    displayTagUstens(recipesFiltre);
}

// ici il faut que je m'occupes des tags, (plus ailleurs je pense)