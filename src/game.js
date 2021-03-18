//Cuál fue la ultima carta a la que se le hizo click?
let lastCardClicked; 
let matchCards;
// Funcion que me pasa la ultima carta a la que le hice click
export const getLastClickedCard = () =>{ 
    return lastCardClicked;
}
// Guarda el click de cual fue la ultima carta
export const setLastClickedCard = (dataItemsId) =>{
    lastCardClicked = dataItemsId;
};

//Guardar la cantidad de match
export const setMatchCards = (count) =>{
    matchCards = count;
}

export const getMatchCards = () =>{
    return matchCards;
}