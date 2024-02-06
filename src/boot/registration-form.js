import "./input.js";
import "./button.js";
import "./card.js";

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
    this.shadowRoot.innerHTML = /* html */ `
    <boot-card>
      <h3 slot="card-header">Register</h3>
      <boot-input slot="card-body" label="Username"></boot-input>
      <boot-input slot="card-body" label="Email"></boot-input>
      <boot-input slot="card-body" label="Password" type="password"></boot-input>
      <boot-input slot="card-body" label="Password Repeat" type="password"></boot-input>
      <boot-button slot="card-body">Register</boot-button>
    </boot-card>
    `;
    const bootInputs = this.shadowRoot.querySelectorAll("boot-input");
    const button = this.shadowRoot.querySelector("boot-button");
    const [
      usernameInput,
      emailInput,
      passwordInput,
      passwordRepeatInput,
    ] = bootInputs;
    usernameInput.addEventListener("boot-input", (event) => {
      this.state.username = event.detail;
      usernameInput.validation = "none";
    });
    emailInput.addEventListener("boot-input", (event) => {
      this.state.email = event.detail;
    });
    passwordInput.addEventListener("boot-input", (event) => {
      this.state.password = event.detail;
      if (this.state.password !== this.state.passwordRepeat) {
        passwordRepeatInput.help = "Password Mismatch";
        passwordRepeatInput.validation = "invalid";
      } else {
        passwordRepeatInput.help = "Passwords are matching";
        passwordRepeatInput.validation = "valid";
      }
    });
    passwordRepeatInput.addEventListener("boot-input", (event) => {
      this.state.passwordRepeat = event.detail;
      if (this.state.password !== this.state.passwordRepeat) {
        passwordRepeatInput.help = "Password Mismatch";
        passwordRepeatInput.validation = "invalid";
      } else {
        passwordRepeatInput.help = "Passwords are matching";
        passwordRepeatInput.validation = "valid";
      }
    });
    this.addEventListener("click-boot-button", (event) => {
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

customElements.define("boot-registration-form", RegistrationForm);
