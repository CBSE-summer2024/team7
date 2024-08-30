import { LitElement, html, css } from 'lit';

export class WarningAlert extends LitElement {
  static styles = css`
    :host {
      border: 1px solid red;
      background-color: #faeaeb;
      border-color: #edc7c7;
      color: #ca090d;
      padding: 10px;
      display: flex;
      align-items: center;
      font-size: 13px;
    }
    .button {
      background-color: #3a5795;
      color: white;
      padding: 5px 10px;
      margin-left: 10px;
      border-radius: 5px;
    }
    .text-content {
      flex-grow: 1;
    }
    .title {
      font-weight: bold;
      margin-right: 10px;
    }
  `;

  static get properties() {
    return {
      buttonText: { type: String },
      alertText: { type: String },
    };
  }

  constructor() {
    super();
    this.buttonText = 'Login';
    this.alertText = 'Note that you are currently browsing without logging in. It comes from the offers and to complete the purchase process in the easiest and easiest way'
  }

  render() {
    return html`
      <b class="title">Very important:</b>
      <span class="text-content">${this.alertText}!</span>
      <button class="button">${this.buttonText}</button>
    `;
  }
}

customElements.define('warning-alert', WarningAlert);
