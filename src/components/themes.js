import themesArray from '../data/themes/themes.js';
import tvShow from '../data/themes/tv.js';
import fruits from '../data/themes/fruits.js';
import singers from '../data/themes/singers.js';
import oneCard from '../components/oneCard.js';
import {setMatchCards} from '../game.js';

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
        // Agregamos el elemento  list of cards (elemento papá)  al elemento (super papá) de html
        document.getElementById("game").innerHTML = ""
        document.getElementById("game").appendChild(listOfCards);
        const duplicateArrayCards = [];
            // Switch para la elección de tema
            //switch dependiendo del tema 
            switch (themesArray[i].name){
                //Si es personaje de tv
                case "personajesDeTv":
                    // toma el arreglo vacio y agregale 2 veces los items del tema tv
                    duplicateArrayCards.push(
                    ...tvShow.items.map(item => ({...item})), 
                    ...tvShow.items.map(item => ({...item})));           
                    break;
                case "cantantes":
                    duplicateArrayCards.push(
                    ...singers.items.map(item => ({...item})),
                    ...singers.items.map(item => ({...item})));
                    break;
                case "frutas":
                    duplicateArrayCards.push(
                    ...fruits.items.map(item => ({...item})),
                    ...fruits.items.map(item => ({...item})));
                    break;   
            }
            //Una vez decidido el tema con el switch vamos a tomar el arreglo y hacerlo aleatorio
            shuffle(duplicateArrayCards);
            //Iterar sobre el arreglo y creamos el elemento imagen
            for (let j = 0; j<duplicateArrayCards.length; j++){
                //seteo match cards en cero
                setMatchCards(0);
                //Crear una nueva propiedad que define el estado de nuestra carta
                duplicateArrayCards[j].revealed = false;
                const cardEl = oneCard(duplicateArrayCards[j]);
                // Agregamos el elemento imagen (que es una funcion)  al elemento papa que es listofcards
                listOfCards.appendChild(cardEl);
            }
        }
    return createElementCards;
    }


//Funcion shuffle
    export function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }