import {btnTriIngredient, btnTriAppareil, btnTriUstens} from "../factories/tagContainer.js";
import {selectTag, selectAppareil, selectUstens} from "./SelectTag.js";
import {searchByTagAppareil, searchByTags, searchByTagUstens, searchByTagsV2, searchByTagV3} from "../algorithme1/searchByTag.js";
import displayRecipe from "./displayRecipe.js";
import refresh from "./refresh.js";
import { tagsArray } from "../index.js";
// ici je met en place des fonctions, qui vont elle même appeler les fonctions contenant les tableaux, qui eux meme contienne les ingredient, ustensiles ou appareil, et ensuite je les fais s'afficher dans le DOM

export  function displayTag(recipes){
    const tag = btnTriIngredient(recipes)
    const ul = document.querySelector('.ingredient');
    tag.map(oneIngredient =>{
        const li = document.createElement('li');
        li.className="ingredient_item hidden";
        li.textContent = oneIngredient;

        // ici je vais mettre en place l'écouteur d'évenement qui va me permettre de géré l'affichage des tags.
        li.addEventListener('click', ()=>{ 
            selectTag(oneIngredient);
            // const newSearchTag = searchByTags(oneIngredient, recipes)


            tagsArray.push(oneIngredient);
            const newSearchTag = searchByTagsV2(tagsArray, recipes)
            // const newSearchTag = searchByTagV3(tagsArray, recipes)
            
            // console.log("log pour voir ce qui a été ajouté dans le tableau :",tagsArray);
            console.log(newSearchTag);

            
        
            refresh(newSearchTag)
            // displayRecipe(newSearchTag)
            // displayTag(newSearchTag)
            // displayTagAppareil(newSearchTag)
            // displayTagUstens(newSearchTag)
        })



        ul.appendChild(li);
    })
    return
}

export function displayTagAppareil(recipes){
    const tagAppareil = btnTriAppareil(recipes)
    const ulAppareil = document.querySelector('.appareil')
    tagAppareil.map(oneAppareil=>{
        const li = document.createElement('li');
        li.className="appareil_item";
        li.textContent= oneAppareil;

        li.addEventListener('click', ()=>{
            selectAppareil(oneAppareil);
            tagsArray.push(oneAppareil);
            console.log("log pour voir ce qui a été ajouté dans le tableau :",tagsArray);
            const newSearchTag = searchByTagAppareil(oneAppareil, recipes);

            refresh(newSearchTag)
            // displayRecipe(newSearchTag);
            // displayTag(newSearchTag);
            // displayTagUstens(newSearchTag);
        })

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


        li.addEventListener('click', ()=>{
            selectUstens(oneUstens);
            tagsArray.push(oneUstens);
            console.log("log pour voir ce qui a été ajouté dans le tableau :",tagsArray);
            const newSearchTag = searchByTagUstens(oneUstens, recipes);

            refresh(newSearchTag)
            // displayRecipe(newSearchTag)
            // displayTag(newSearchTag)
            // displayTagAppareil(newSearchTag)
            
        })



        ulUstens.appendChild(li)
    })
    return
}