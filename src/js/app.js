import * as flsFunctions from './modules/functions.js';
import { handleScroll } from './modules/handleScroll.js';

flsFunctions.isWebp();

const prepare = () => {
  handleScroll();
};

document.addEventListener('DOMContentLoaded', prepare);
