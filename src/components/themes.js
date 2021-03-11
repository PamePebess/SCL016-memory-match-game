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
        // Agregamos el elemento  list of cards (elemento papa)  al elmento (super papa) de html
        document.getElementById("game").appendChild(listOfCards);
            // Switch para la elección de tema
            switch (themesArray[i].name){
                case "personajesDeTv":
                    for (let j = 0; j<tvShow.items.length; j++){
                        const oneCard = document.createElement("img");
                        oneCard.src = tvShow.items[j].image;
                        listOfCards.appendChild(oneCard);
                    }
                    oneCard.textContent = tvShow.name;
                    break;
                case "cantantes":
                    oneCard.textContent = singers.name;
                    break;
                case "frutas":
                    oneCard.textContent = fruits.name;
                    break;   
            }
        }
    return createElementCards;
    }
