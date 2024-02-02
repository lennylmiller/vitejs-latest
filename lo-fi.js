const template = document.createElement('template');
template.innerHTML = /* html */ `
<article>
  <header>
    <slot name="header">
      <h1>title</h2>
    </slot>
    <slot name="subtitle">
      <h2>subtitle</h2>
    </slot>
  </header>
  <p>
    <slot></slot>
  </p>
  <footer>
    <slot name="footer"></slot>
  </footer>
</article>`;

customElements.define(
  'ce-article',
  class extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({
        mode: 'open'
      });
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
);