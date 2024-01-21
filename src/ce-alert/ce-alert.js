const template = document.createElement('template');
template.innerHTML = /*html*/ `
<link rel="stylesheet" href="/tailwind.css" />
<div
  class="flex items-center justify-between rounded-xl border border-contrast-300 bg-canvas py-2 pl-4 pr-3 text-sm text-content shadow-sm">
  <span class="text-sm">
    <slot></slot>
  </span>
  <button
    id="close-button"
    type="button"
    class="ml-1 -mr-1 inline-flex h-8 w-8 items-center justify-center p-0.5 text-current">
    x
  </button>
</div>`;

export class Alert extends HTMLElement {
  static get observedAttributes() {
    return ['data-color'];
  }
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const button = this.shadowRoot.getElementById(`close-button`);
    button.addEventListener(
      'click',
      () => {
        this.dispatchEvent(new CustomEvent('close'));
        this.remove();
      },
      { once: true }
    );
  }
  attributeChangedCallback(name, prev, curr) {
    if (prev !== curr) {
      this.shadowRoot.querySelector('.alert').classList.remove(prev);
      this.shadowRoot.querySelector('.alert').classList.add(curr);
    }
  }
}

customElements.define('ce-alert', Alert);
