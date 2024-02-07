const template = document.createElement('template');
template.innerHTML = /* html */`
  <link rel="stylesheet" href="/tailwind.css" />
  <!-- <style>
    :host([validation="invalid"]) input {
      border-color: red;
    }

    :host([validation="valid"]) input {
      border-color: green;
    }

    :host([validation=""]) span {
      display: none;
    }

    :host([validation=""]) span {
      display: none;
    }

    span:not([validation]) {
      display: none;
    }

    :host([validation="none"]) span {
      display: none;
    }

    :host([validation="valid"]) span {
      display: block;
      color: green;
    }

    :host([validation="invalid"]) span {
      display: block;
      color: red;
    }
  </style>
  <style>
    :root {
      --md-outlined-text-field-container-shape: 0px;
      --md-sys-typescale-body-large: 400 1rem system-ui;
      --md-sys-color-primary: #006a6a;
      --md-outlined-text-field-label-text-color: #3f4948;
      --md-outlined-text-field-input-text-color: #161d1d;
    }
  </style> -->

  <md-outlined-text-field label="Outlined" value="Value"></md-outlined-text-field>

  <!-- <div>
    <label for="mwc-input" class="block text-sm font-medium leading-6 text-gray-900"></label>
    <div id="input-error-wrapper" class="relative mt-2 rounded-md shadow-sm">
      <input name="mwc-input" id="mwc-input"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="" aria-invalid="true" aria-describedby="mwc-input">
    </div>
    <span class="mt-2 text-sm text-red-600" id="mwc-input-error"></span>

    <md-outlined-text-field label="Label" value="Value">
    </md-outlined-text-field> -->
  </div>
`;

export class Input extends HTMLElement {
  label 
  input
  span
  validation

  static get observedAttributes() {
    return ['help', 'validation'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'}); 
  }

  appendError() {
    const inputErrorWrapper = this.shadowRoot.querySelector('#input-error-wrapper');
    const errorMessageEl = this.shadowRoot.querySelector('#error-message');

    if (errorMessageEl) {
      errorMessageEl.remove();
    }

    inputErrorWrapper.append(
      `<div id="error-message" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd" />
        </svg>
      </div>`
    )
  }

  nonnectedCallback() {
    // 1. Render a cloned template to the shadowDom
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // 2. Create a reference to the active elements
    const label = this.shadowRoot.querySelector('label');
    label.textContent = this.getAttribute('label');

    this.span = this.shadowRoot.querySelector('span');
    this.span.textContent = this.getAttribute('help');

    const input = this.shadowRoot.querySelector('input');
    input.type = this.getAttribute('type') || 'text';
    input.addEventListener('input', (event) => {
      event.stopPropagation();
      input.dispatchEvent(
        new CustomEvent('mwc-input', {
          bubbles: true,
          composed: true,
          detail: event.target.value,
        })
      )
    });
  }
  
  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const label = this.shadowRoot.querySelector('label');
    label.textContent = this.getAttribute('label');

    this.span = this.shadowRoot.querySelector('span');
    this.span.textContent = this.getAttribute('help');

    const input = this.shadowRoot.querySelector('input');
    input.type = this.getAttribute('type') || 'text';
    input.addEventListener('input', (event) => {
      event.stopPropagation();
      input.dispatchEvent(
        new CustomEvent('mwc-input', {
          bubbles: true,
          composed: true,
          detail: event.target.value,
        })
      )
    });

    console.log('connectedCallback');

    // input.classList.add('validation')
    this.validation = input.getAttribute('validation');

    switch(this.validation) {
      case 'none':
        console.log('none');
        input.classList.remove('error');
        break;
      case 'valid':
        console.log('valid');
        input.classList.add('success');
        break;
      case 'invalid':
        console.log('invalid');
        input.classList.add('error');
        break;
      default:
        console.log('null');
        input.classList.remove('error');
        break;
    }

    // 1. if Validation exists and validation === 'valid' apply green to outline
    //    or if validation exists and validation === 'none' || null apply no color to outline
    //    or if validation exist and validation === 'invalid' apply red to outline

  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.span ? this.span.textContent = newValue : '';
  }

  get help() {
    return this.getAttribute('help');
  }

  set help(help) {
    this.setAttribute('help', help);
  }

  get validation() {
    return this.getAttribute('validation');
  }

  set validation(validation) {
    this.setAttribute('validation', validation);
  }
}

customElements.define('mwc-input', Input);