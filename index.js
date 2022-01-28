import Card from './js/Card.js';

import { create } from './js/create.js';

// NodeList [HTMLElement, HTMLElement]
const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach((cardElement) => {
  Card(cardElement);
});

create();
