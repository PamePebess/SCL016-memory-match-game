import themesArray from '../data/themes/themes.js';
import tvShow from '../data/themes/tv.js';
import fruits from '../data/themes/fruits.js';
import singers from '../data/themes/singers.js';

export const themes = () => {
    const listOfThemes = document.createElement("div");
    for (let i =0; i<themesArray.length; i++){
        const themeButtonElement = document.createElement("img");
        themeButtonElement.src = themesArray[i].image;
        themeButtonElement.addEventListener("click", showCards(i));
        listOfThemes.appendChild(themeButtonElement);
        listOfThemes.className = "themesButtons";
        
    }
    return listOfThemes;
};
//Funcion que muestra "algo" al hacer click en un tema
export const showCards = (i) => {
    const createElementCards = () =>{
        //Mostrar y ocultar las secciones
        document.getElementById("themes").style.display = "none";
        document.getElementById("game").style.display = "flex";
        //Crear una variable donde guardo un nuevo elemento html div
        const listOfCards = document.createElement("div");
        listOfCards.className = "cards";
        // Agregamos el elemento  list of cards (elemento papa)  al elmento (super papa) de html
        document.getElementById("game").appendChild(listOfCards);
        const duplicateArrayCards = [];
            // Switch para la elección de tema
            switch (themesArray[i].name){
                case "personajesDeTv":
                    duplicateArrayCards.push(...tvShow.items, ...tvShow.items);
                    for (let j = 0; j<duplicateArrayCards.length; j++){
                        const oneCard = document.createElement("img");
                        oneCard.src = duplicateArrayCards[j].image;
                        listOfCards.appendChild(oneCard);
                    }
                    break;
                case "cantantes":
                    duplicateArrayCards.push(...singers.items, ...singers.items);
                    for (let j = 0; j<duplicateArrayCards.length; j++){
                        const oneCard = document.createElement("img");
                        oneCard.src = duplicateArrayCards[j].image;
                        listOfCards.appendChild(oneCard);
                    }
                    break;
                case "frutas":
                    duplicateArrayCards.push(...fruits.items, ...fruits.items);
                    for ( let j = 0; j<duplicateArrayCards.length; j++){
                        const oneCard = document.createElement("img");
                        oneCard.src = duplicateArrayCards[j].image;
                        listOfCards.appendChild(oneCard);
                    }
                    break;   
            }
        }
    return createElementCards;
    }
