import { html, LitElement } from 'lit-element';

export class HomeView extends LitElement {
  render() {
    return html`Home…`;
  }
}

customElements.define('home-view', HomeView);
