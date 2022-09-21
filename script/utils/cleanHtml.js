// mettre en place la fonction qui va nettoyer l'html et l'appele dans la page algo
export default function cleanHtml(){
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
}