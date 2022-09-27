//ici faire l'algorithme de recherche par rapport au tags

// import cleanHtml from "../utils/cleanHtml.js";


export function searchByTags(tagSelected, recipes){
    // mettre en place la fonction.
    let selectedRecipes = [];
    const ingredientsFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected)));

    // cleanHtml();
    // mettre en place la fonction
    const applianceFiltre = recipes.filter((recipe)=> recipe.appliance.toLowerCase().includes(tagSelected));
    
    // cleanHtml();
    const ustensilsFiltre = recipes.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.toLowerCase().includes(tagSelected)));

    // cleanHtml();

    selectedRecipes = [
        ...ingredientsFiltre,
        ...applianceFiltre,
        ...ustensilsFiltre,
      ];
      return selectedRecipes;
}






// il faut que je rassemble c'est 3 fonctions , dans une seule..... OUIN
export function searchByTagsV2(tagSelected, recipes){
    // const ingredient= document.querySelectorAll('.tagShowUpIngredient')
    // const appareil = document.querySelectorAll('.tagShowUpAppareil')
    // const ustens = document.querySelectorAll('.tagShowUpUstens')
    // const divTag = document.querySelector('.tagSelect')
    // console.log(ingredient, appareil, ustens);
    
    // if (divTag.includes(ingredient)) {
    //      recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected)))
    // }
    // else if(divTag.childNodes.includes(appareil)){
    //     recipes.filter((recipe)=> recipe.appliance.toLowerCase().includes(tagSelected))
    // }
    // else if(divTag.childNodes.includes(ustens)){
    //     recipes.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.toLowerCase().includes(tagSelected)))
    // }

  
    // const tagFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected))|| recipes.filter((recipe)=> recipe.appliance.toLowerCase().includes(tagSelected)) ||recipes.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.toLowerCase().includes(tagSelected))))
    
    // const tagFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> tagSelected.includes(ing.ingredient.toLowerCase())));
    // console.log(tagFiltre);
    // console.log(tagSelected);
    // if(tagSelected.length = 0){
    //     return recipes
    // }
    // return tagFiltre




    // je vais tenter avec une boucle... je cabre
    
    const oneTag = tagSelected.forEach(element => {
        console.log(element);
        
        return element
        // console.log(tagFiltre);
        // tagFiltre.forEach(tag =>{
            //     console.log(tag);
            //     return tag
            // })
    });
    const tagFiltre = recipes.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(oneTag)))
    console.log(tagFiltre);
    // ici j'ai essayer de regroupé les 3 fonctions dans une seule.. echec.
}
export function searchByTagV3(tagArray, recipes){
    const result = searchByTags(tagArray, recipes)
    console.log('RESULT', result);
    return result
}