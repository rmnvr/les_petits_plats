// faire la fonction qui va m'afficher uniquement les ingredient dans le bouton, rien d'autre.
export  function btnTriIngredient(recipes){
    // je commence par crée un tableau vide.
    const allIngredient = [];
    // ensuite j'itere sur l'objet recipes (les recettes)
    recipes.forEach(element => {
        //  et ici je re itere sur l'objet element mais je vais ici chercher uniquement que les ingredients. que j'insere ensuite dans mon tableau vide.
        element.ingredients.forEach(object => allIngredient.push(object.ingredient))
    });

    // ici je fais un .map pour parcourir les elements de mon tableau, et tout mettre en minuscule.
    const ingredientMinuscule = allIngredient.map(element =>{
        return element.toLowerCase()
    })
    // ensuite avec un new Set je filtre mon nouveau tableau pour pouvoir supprimé tous les doublons.
    const setIngredient = [... new Set(ingredientMinuscule)]
    
    return setIngredient;  
} 

export  function btnTriAppareil(recipes){
    // je commence par crée un tableau vide
    const allAppareil = [];
    // ici je vais iterer sur l'objet recipes, pour en sortir que les appareils.(appliance)
    recipes.forEach(element => {
        allAppareil.push(element.appliance)
    });
    // ici je fais un .map pour parcourir les elements du tableau, et tout mettre en minuscule.
    const appareilMinuscule = allAppareil.map(element =>{
        return element.toLowerCase();
    })
    // ensuite ici je fais un new set et je filtre a nouveau mon tableau, pour qu'il supprime tout les doublons.
    const setAppareil = [... new Set(appareilMinuscule)]

    return setAppareil
}

export function btnTriUstens(recipes){
    const allUstens = [];

    recipes.forEach(element =>{
        element.ustensils.forEach(ustensil => allUstens.push(ustensil))
    })
    const ustensMinuscule = allUstens.map(element =>{
        return element.toLowerCase();
    })
    const setUstens = [... new Set(ustensMinuscule)];

    return setUstens
}

export function allTags(recipes){
    // ici je met en place un tableau qui me recupere tout les tags, qui va me servir pour géré la recherche par tags.
    const tags = [];
    tags.push(btnTriIngredient(recipes))
    tags.push(btnTriAppareil(recipes))
    tags.push(btnTriUstens(recipes))
    
    console.log(tags);
}