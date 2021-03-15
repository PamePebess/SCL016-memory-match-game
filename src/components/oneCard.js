const createOneCardEl = (dataItems) =>{
    //creamos una variable que guarda la creacion del elemento imagen
    const oneCard = document.createElement("img");
    //le damos la ruta 
    oneCard.src = dataItems.image;
    //Nos retorna la carta creada
    return oneCard;
}

export default createOneCardEl;