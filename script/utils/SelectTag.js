//ici faire une fonction que j'appelerai dans displayTag qui permettra de crée et afficher le bouton avec le tag concerner, mais il vas falloir aussi le trier avec le tableau recipes.
export function selectTag(oneTag){
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="ingredientTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpIngredient"


    iconClose.addEventListener('click', ()=>{
        removeTag(tagAfficher);
    })


    divTagSelect.style.display="flex"
    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}

export function selectAppareil(oneTag){
    //mettre en place cette fonction, comme au dessus.
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="AppareilTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpAppareil"


    iconClose.addEventListener('click', ()=>{
        removeTag(tagAfficher);
    })

    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}

export function selectUstens(oneTag){
    //mettre en place cette fonction, comme au dessus.
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="AppareilTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpUstens"


    iconClose.addEventListener('click', ()=>{
        removeTag(tagAfficher);
    })

    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}
// la je met en place la fonction qui va le refermer.
function removeTag(button){
    // je me sert de remove pour supprimé l'élement html, beaucoup plus simple pour ce cas la plutot que de jouer avec le style, sa fonctionne a moitié vu que sa m'enleve le premiere element html
    
    button.remove();

}