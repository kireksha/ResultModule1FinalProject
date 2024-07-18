import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {

    this.state = {
      amount: '',
    };

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $formHeading = document.createElement('label');
    $formHeading.className = 'donate-form__input-label';
    $formHeading.textContent = 'Введите сумму в $';

    this.$rootElement.appendChild($formHeading);

    const $formInput = document.createElement('input');
    $formInput.className = 'donate-form__donate-input';
    this.setAttributes($formInput, {'name': 'amount', 'type': 'number', 'max': 100, 'min': 1, 'required': true})
    $formHeading.appendChild($formInput)

    const $formBtn = document.createElement('button');
    $formBtn.className = 'donate-form__submit-button';
    $formBtn.textContent = 'Задонатить';
    this.setAttributes($formBtn, {'disabled': 'true', 'type': 'submit'});
    this.$rootElement.appendChild($formBtn);

    this.$input = $formInput;
    this.$button = $formBtn;

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.isValid ? this.$button.disabled = false : this.$button.disabled = true
  }

  handleSubmit(event) {
    event.preventDefault();
    this.isValid ? this.props.onSubmit(Number(this.state.amount)) : console.log('error')
    this.state.amount = '';
    this.$input.value = '';

  }

  get isValid() {
    return (Number(this.state.amount) >= 1) && (Number(this.state.amount) <= 100) ? true : false;
  }
}
