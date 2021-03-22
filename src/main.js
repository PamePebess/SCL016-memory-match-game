/*import App from './components/App.js';*/
import {themes, showCards} from './components/themes.js';
import {getIndexTheme} from '../game.js';
//Listener de botones 
const listenersButtons = () =>{
    document.getElementById("startPlay").addEventListener("click",buttonThemes);
    document.getElementById("exit").addEventListener("click",buttonExit);
    document.getElementById("instructions").addEventListener("click",buttonInstructions);
    document.getElementById("guideExit").addEventListener("click",buttonGuideExit);
    document.getElementById("backToMenu").addEventListener("click",buttonBackToMenu);
    document.getElementById("playAgain").addEventListener("click", buttonPlayAgain);
}
//Funcion que pase desde el home a selección de temas
const buttonThemes = () =>{
    document.getElementById("themes").style.display = "flex";
    document.getElementById("home").style.display = "none";  
}
//Funcion boton salir de la página de temas
const buttonExit = () =>{
    document.getElementById("home").style.display = "flex";
    document.getElementById("themes").style.display = "none";
}
//Función botón para ir a la página de instrucciones
const buttonInstructions = () =>{
    document.getElementById("guide").style.display = "flex";
    document.getElementById("home").style.display = "none";
}
//Función botón salir de la página de instrucciones
const buttonGuideExit = () =>{
    document.getElementById("home").style.display = "flex";
    document.getElementById("guide").style.display = "none";
}
//Funcion html dinamico de seleccion de temas
const selectionThemes = ()=>{
    document.getElementById("themesSelection").appendChild(themes());
}
//Función botón volver al menú
const buttonBackToMenu = ()=>{
    document.getElementById("themes").style.display = "flex";
    document.getElementById("resultsPage").style.display = "none";
}
//Función botón volver al juego
const buttonPlayAgain = () =>{
    document.getElementById("game").style.display = "flex"
    document.getElementById("resultsPage").style.display = "none";
    const showCardsFun = showCards(getIndexTheme());
    showCardsFun();
}
//Funciones que se llaman siempre
listenersButtons();
selectionThemes();
