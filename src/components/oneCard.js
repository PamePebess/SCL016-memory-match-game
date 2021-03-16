const createOneCardEl = (dataItems) =>{
     //Función que muestre una carta al hacer click
     const showCardClick =() =>{
        dataItems.revealed = true;
        oneCard.src = dataItems.image;
        }
    //creamos una variable que guarda la creacion del elemento imagen
    const oneCard = document.createElement("img");
    //Crear addEventListener
    oneCard.addEventListener("click", showCardClick)
    //Crear condicion que nos muestra la carta dada vuelta
    if (dataItems.revealed == false){
        oneCard.src = 'image/backface.jpg';
    } else {
        oneCard.src = dataItems.image;
    }
    //Nos retorna la carta creada
    return oneCard;
    }

export default createOneCardEl;