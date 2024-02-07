import "./input.js";
import "./button.js";
import "./card.js";

const template = document.createElement('template');
template.innerHTML = /* html */`
  <mwc-card>
    <h3 slot="card-header">Register</h3>
    <mwc-input slot="card-body" label="Username"></mwc-input>
    <mwc-input slot="card-body" label="Email"></mwc-input>
    <mwc-input slot="card-body" label="Password" type="password"></mwc-input>
    <mwc-input slot="card-body" label="Password Repeat" type="password"></mwc-input>
    <mwc-button slot="card-body">Register</mwc-button>
  </mwc-card>
`;

class RegistrationForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.state = {
      username: null,
      email: null,
      password: null,
      passwordRepeat: null,
    };
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const mwcInputs = this.shadowRoot.querySelectorAll("mwc-input");
    const button = this.shadowRoot.querySelector("mwc-button");
    const [
      usernameInput,
      emailInput,
      passwordInput,
      passwordRepeatInput,
    ] = mwcInputs;
    usernameInput.addEventListener("mwc-input", (event) => {
      this.state.username = event.detail;
      usernameInput.validation = "none";
    });
    emailInput.addEventListener("mwc-input", (event) => {
      this.state.email = event.detail;
    });
    passwordInput.addEventListener("mwc-input", (event) => {
      this.state.password = event.detail;
      if (this.state.password !== this.state.passwordRepeat) {
        passwordRepeatInput.help = "Password Mismatch";
        passwordRepeatInput.validation = "invalid";
      } else {
        passwordRepeatInput.help = "Passwords are matching";
        passwordRepeatInput.validation = "valid";
      }
    });
    passwordRepeatInput.addEventListener("mwc-input", (event) => {
      this.state.passwordRepeat = event.detail;
      if (this.state.password !== this.state.passwordRepeat) {
        passwordRepeatInput.help = "Password Mismatch";
        passwordRepeatInput.validation = "invalid";
      } else {
        passwordRepeatInput.help = "Passwords are matching";
        passwordRepeatInput.validation = "valid";
      }
    });
    this.addEventListener("click-mwc-button", (event) => {
      button.inprogress = true;
      setTimeout(() => {
        usernameInput.validation = "invalid";
        usernameInput.help = "Name must be unique";
        emailInput.validation = "invalid";
        emailInput.help = "Cannot be null";
        button.inprogress = false;
      }, 2000);
    });
  }
}

customElements.define("mwc-registration-form", RegistrationForm);
