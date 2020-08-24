import { html, LitElement } from 'lit-element';

import '@material/mwc-button';
import '@material/mwc-textfield';

export class SearchView extends LitElement {
  static get properties() {
    return {
      latitude: { type: String },
      longitude: { type: String },
      radius: { type: Number },
    };
  }

  render() {
    return html`
      <h1>Search</h1>

      <mwc-textfield label="Latitude" @keyup="${e => (this.latitude = e.target.value)}"></mwc-textfield>
      <mwc-textfield label="Longitude" @keyup="${e => (this.longitude = e.target.value)}"></mwc-textfield>
      <mwc-textfield label="Radius (m)" @keyup="${e => (this.radius = e.target.value)}"></mwc-textfield>

      <mwc-button outlined label="Locate Me" icon="my_location"></mwc-button>
      <mwc-button raised label="Search"></mwc-button>
    `;
  }
}

customElements.define('search-view', SearchView);
