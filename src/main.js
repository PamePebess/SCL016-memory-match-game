import App from './components/App.js';

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





//Funciones que se llaman siempre
listenersButtons();