import {btnTriIngredient, btnTriAppareil, btnTriUstens} from "../factories/tagContainer.js";

// ici je met en place des fonctions, qui vont elle même appeler les fonctions contenant les tableaux, qui eux meme contienne les ingredient, ustensiles ou appareil, et ensuite je les fais s'afficher dans le DOM

export  function displayTag(recipes){
    const tag = btnTriIngredient(recipes)
    const ul = document.querySelector('.ingredient');
    tag.map(oneIngredient =>{
        const li = document.createElement('li');
        li.className="ingredient_item hidden";
        li.textContent = oneIngredient;

        ul.appendChild(li);
    })
    return
}

export function displayTagAppareil(recipes){
    const tagAppareil = btnTriAppareil(recipes)
    const ulAppareil = document.querySelector('.appareil')
    tagAppareil.map(oneAppareil=>{
        const li = document.createElement('li')
        li.className="appareil_item"
        li.textContent= oneAppareil

        ulAppareil.appendChild(li);
    })
    return
}

export function displayTagUstens(recipes){
    const tagUstens = btnTriUstens(recipes)
    const ulUstens = document.querySelector('.ustens')
    tagUstens.map(oneUstens=>{
        const li = document.createElement('li')
        li.className="ustens_item"
        li.textContent= oneUstens;

        ulUstens.appendChild(li)
    })
    return
}