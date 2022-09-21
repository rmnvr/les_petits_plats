//ici faire l'algorithme de recherche par rapport au tags

// import cleanHtml from "../utils/cleanHtml.js";


export function searchByTags(tagSelected, recipes){
    // mettre en place la fonction.
    
    const tagFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected)));

    // cleanHtml();

    return tagFiltre;

}
export function searchByTagAppareil(tagSelected, recipes){
    // mettre en place la fonction
    const tagFiltre = recipes.filter((recipe)=> recipe.appliance.toLowerCase().includes(tagSelected));
    
    // cleanHtml();

    return tagFiltre;
}

export function searchByTagUstens(tagSelected, recipes){
    const tagFiltre = recipes.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.toLowerCase().includes(tagSelected)));

    // cleanHtml();

    return tagFiltre;
}