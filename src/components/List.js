import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $donatesTitle = document.createElement('h2');
    $donatesTitle.className = 'donates-container__title';
    $donatesTitle.textContent = 'Список донатов';
    const $donatesContainer = document.createElement('div');
    $donatesContainer.className = 'donates-container__donates';
    this.$rootElement.appendChild($donatesTitle);
    this.$rootElement.appendChild($donatesContainer);

    this.$listContainer = $donatesContainer;


    // ...
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}