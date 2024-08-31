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
      margin-left: 30px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
    }
    .button:hover {
      color: #3a5795;
      background-color: white;
      border: 1px solid #3a5795;
    }
    .text-content {
      flex-grow: 1;
    }
    .title {
      font-weight: bold;
      margin-right: 10px;
    }
    .cancel-button {
      background-color: #d9534f;
      border: none;
      border-radius: 100%;
      color: white;
      cursor: pointer;
      margin-left: 30px;
    }
    .cancel-button::before {
      content: '×';
      font-size: 18px;
      font-weight: bold;
      float: left;
      margin-top: 1.5px;
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
    this.alertText = 'Note that without logging account. It comes from the offers and to complete the purchase process in the easiest and easiest way'
  }

  render() {
    return html`
      <b class="title">Very important:</b>
      <span class="text-content">${this.alertText}!</span>
      <button class="button">${this.buttonText}</button>
      <button class="cancel-button" @click="${this._handleCancel}"></button>
    `;
  }

  _handleCancel() {
    console.log('Cancel button clicked');
  }
}

customElements.define('warning-alert', WarningAlert);
