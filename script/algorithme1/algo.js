// ici je vais commencer a mettre mon algorithme en place.

export default function searchRecipe(lettre, recipes){
    // alors ici, je met en place une constante, qui contient t'es conditions, et retourne les recettes correspondante a la valeur de l'input. je met des || pour tout comparer directement.

    const recipesFiltre = recipes.filter((recipe) => recipe.name.toLowerCase().includes(lettre) || recipe.description.toLowerCase().includes(lettre) ||
    recipe.ingredients.some((ingObj) => {
     ingObj.ingredient.toLowerCase().includes(lettre)
    }) )

    const cards = document.querySelectorAll('.card')
    const containCards = document.querySelector('.recette_card')
    console.log(containCards);
    containCards.innerHTML= "";
    // ma constante mise en place, maintenant je dois faire en sorte d'effacer toute les cards, et re afficher uniquement celle correspondante a la recette.
    console.log(recipesFiltre);
}