import themesArray from '../data/themes/themes.js';

const themes = () => {
    const listOfThemes = document.createElement("div");
    for (let i =0; i<themesArray.length; i++){
        const themeButtonElement = document.createElement("img");
        themeButtonElement.src = themesArray[i].image;
        listOfThemes.appendChild(themeButtonElement);
        listOfThemes.className = "themesButtons";
    }
    return listOfThemes;
};


export default themes;
