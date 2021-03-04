import App from './components/App.js';
import themes from './components/themes.js';
//document.getElementById('root').appendChild(App());

//Listener de botones 
const listenersButtons = () =>{
    document.getElementById("startPlay").addEventListener("click",buttonThemes);
    document.getElementById("exit").addEventListener("click",buttonExit);

}
//Funcion que pase desde el home a selección de temas
const buttonThemes = () =>{
    document.getElementById("themes").style.display = "initial";
    document.getElementById("home").style.display = "none";  
}
//Funcion boton salir de la página de temas
const buttonExit = () =>{
    document.getElementById("home").style.display = "initial";
    document.getElementById("themes").style.display = "none";
}

//Funcion html dinamico de seleccion de temas
const selectionThemes = ()=>{
    document.getElementById("themesSelection").appendChild(themes());
}





//Funciones que se llaman siempre
listenersButtons();
selectionThemes();