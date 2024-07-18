import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {

    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const $boldAmount = document.createElement('b');
    $boldAmount.textContent = `$${this.state.amount}`

    const $donateItem = document.createElement('div');
    $donateItem.className = 'donate-item';
    $donateItem.textContent = `${this.state.date.getDate()}/${this.state.date.getMonth()+1}/${this.state.date.getFullYear()}, ${this.state.date.getHours()}:${this.state.date.getMinutes()}:${this.state.date.getSeconds()} - ${$boldAmount.innerHTML}`

    this.$rootElement.appendChild($donateItem)
  }
}
