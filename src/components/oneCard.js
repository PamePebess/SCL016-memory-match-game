import {getLastClickedCard, setLastClickedCard} from '../game.js';

const createOneCardEl = (dataItems) =>{
    //creamos una variable que guarda la creacion del elemento imagen
    const oneCard = document.createElement("img");
    //Asignar nueva propiedad a data items que sea su elemento img
    dataItems.element = oneCard;
    //Crear addEventListener
    oneCard.addEventListener("click", showCardClick(dataItems))
    //todas las cartas estan dadas vuelta
    oneCard.src = 'image/backface.jpg';
    //Nos retorna la carta creada
    return oneCard;
    }

//Función que muestre una carta al hacer click
const showCardClick =(dataItems) =>{
    return () =>{
        dataItems.revealed = true;
        dataItems.element.src = dataItems.image;
        //crear variable para guardar la funcion que nos da la info del click de la ultima carta
        const clickedCard = getLastClickedCard();
        //Veo si hay algo en lastclicked card 
        if(clickedCard==null){
        setLastClickedCard(dataItems);
        console.log ("click en la primera carta");
    //Si es que ya hay una carta guardada , es decir ya hubo un primer click, debemos comprara
        }else{
            if (clickedCard.id == dataItems.id){
                clickedCard.revealed = true;
                clickedCard.element.src = dataItems.image;
                dataItems.revealed= true;
                dataItems.element.src = dataItems.image;
            }else{ //escondelas 
                const hideCards = () =>{
                clickedCard.revealed = false;
                clickedCard.element.src ='image/backface.jpg';
                dataItems.revealed= false;
                dataItems.element.src= 'image/backface.jpg';
                }
                setTimeout(hideCards,1000);  
            }
        // Ya que se hicieron los 2 click ahora hay que resetear la variable ultima carta
        setLastClickedCard(null);
        }
    }
}

export default createOneCardEl;