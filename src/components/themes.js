import themesArray from '../data/themes/themes.js';

const themes = () => {
    const listOfThemes = document.createElement("div");
    for (let i =0; i<themesArray.length; i++){
        const themeButtonElement = document.createElement("button");
        themeButtonElement.textContent = themesArray[i].name;
        listOfThemes.appendChild(themeButtonElement);
        listOfThemes.className = "themesButtons";
    }
    return listOfThemes;
};


export default themes;
