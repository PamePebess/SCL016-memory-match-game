import {themes, showCards, shuffle} from './themes.js';
import {showCardClick} from './oneCard.js';
import createOneCardEl from './oneCard.js';
import {getLastClickedCard, getMatchCards, setLastClickedCard, setMatchCards, setIndexTheme,getIndexTheme} from '../game.js';
// Themes y One card retornen un elemento HTML
describe('themes', () => {
  it('should render without crashing', () => {
    const el = themes();
    expect(el instanceof HTMLElement).toBe(true);
  });
});
describe('oneCard', () => {
  it('should render without crashing', () => {
    const el = createOneCardEl(dataTest);
    expect(el instanceof HTMLElement).toBe(true);
  });
});
// Objeto para simulación del test 
const dataTest = {
  id: 'pruebatest',
  image: 'image/fruits/orange.jpg',
  revealed: true,
};
// Shuffle sea una función 
describe('shuffle', () => {
  it('should be a function', () => {
    expect(typeof shuffle).toBe('function');
  });
});
//Game.js
describe('game', () =>{
  it('should get and set last card', () => {
    setLastClickedCard('apple');
    expect(getLastClickedCard()).toMatch('apple');
  });
  it ('should get and set match card', () => {
    setMatchCards(2);
    expect(getMatchCards()).toBe(2);
  });
  it ('should get and set index Theme', () => {
    setIndexTheme(2);
    expect(getIndexTheme()).toBe(2);
  });
});
//OneCard.js
describe('showCardClick', ()=>{
  it('should render without crashing', ()=>{
    expect(showCardClick(dataTest)).not.toThrow(Error);
  });
});
describe ('showCards', ()=>{
  it ('should return a function', ()=>{
    expect(typeof showCards(0)).toBe('function');
  });
  /*it('should return a function that runs without error', ()=>{
    const returnedFunction = showCards(0);
    expect(returnedFunction()).not.toThrow(Error);
  })*/
});



