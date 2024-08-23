import { LitElement, html, css } from 'lit';

export class WarningAlert extends LitElement {
  static styles = css`
    h1 {
      color: red;
    }
  `;

  render() {
    return html`<h1>Hello from Lit Component!</h1>`;
  }
}

customElements.define('warning-alert', WarningAlert);
