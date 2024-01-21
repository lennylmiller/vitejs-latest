const template = document.createElement('template');
template.innerHTML = /* html */`
  <link rel="stylesheet" href="/tailwind.css" />
  <style>
    :host([validation="invalid"]) span {
      display: block;
      color: red;
    }

    :host([validation="invalid"]) input {
      border-color: red;
    }

    :host([validation="valid"]) span {
      display: block;
      color: green;
    }

    :host([validation="valid"]) input {
      border-color: green;
    }
  </style>
  <div>
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900"></label>
    <div id="input-error-wrapper" class="relative mt-2 rounded-md shadow-sm">
      <input type="email" name="email" id="email"
        class="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
        placeholder="you@example.com" aria-invalid="true" aria-describedby="email-error">
    </div>
    <span class="mt-2 text-sm text-red-600" id="email-error"></span>
  </div>
`;

export class Input extends HTMLElement {
  static get observedAttributes() {
    return ['help'];
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

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const label = this.shadowRoot.querySelector('label');
    label.textContent = this.getAttribute('label');

    this.span = this.shadowRoot.querySelector('span');
    this.span.textContent = this.getAttribute('help');

    const input = this.shadowRoot.querySelector('input');
    input.type = this.getAttribute('type');
    input.addEventListener('input', (event) => {
      event.stopPropagation();
      input.dispatchEvent(
        new CustomEvent('inag-input', {
          bubbles: true,
          composed: true,
          detail: event.target.value,
        })
      )
    });
  }

  attributeChangedCallback(name, prev, curr) {
    this.span.textContent = newValue;
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

customElements.define('inag-input', Input);