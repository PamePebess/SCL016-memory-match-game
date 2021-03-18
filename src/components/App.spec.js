/*import App from './App.js';*/
import {themes} from './themes.js';
import createOneCardEl from './oneCard.js';

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

const dataTest = {
  id: 'pruebatest',
  image: 'image/fruits/orange.jpg',
  revealed: true,
  
};

/*describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});*/
