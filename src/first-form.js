/// <reference types="vite/client" />

export class FirstForm {
  static get is() {
    return 'first-form';
  }

  get show() {
    console.log('FirstForm:show()');
    alert('FirstForm:show()-initiated')
  }

}

 