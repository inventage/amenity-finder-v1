import { css, html, LitElement } from 'lit-element';

import '@material/mwc-button';
import '@material/mwc-textfield';
import '@inventage/leaflet-map/dist/leaflet-map.js';

export class SearchView extends LitElement {
  static get properties() {
    return {
      latitude: { type: String },
      longitude: { type: String },
      radius: { type: Number },
    };
  }

  static get styles() {
    return css`
      leaflet-map {
        height: 50vh;
      }
    `;
  }

  constructor() {
    super();

    this.latitude = '47.3902';
    this.longitude = '8.5158';
    this.radius = 1000;
  }

  render() {
    return html`
      <h1>Search</h1>

      <mwc-textfield label="Latitude" @keyup="${e => (this.latitude = e.target.value)}"></mwc-textfield>
      <mwc-textfield label="Longitude" @keyup="${e => (this.longitude = e.target.value)}"></mwc-textfield>
      <mwc-textfield label="Radius (m)" @keyup="${e => (this.radius = e.target.value)}"></mwc-textfield>

      <mwc-button outlined label="Locate Me" icon="my_location"></mwc-button>
      <mwc-button raised label="Search"></mwc-button>

      <leaflet-map .latitude="${this.latitude}" .longitude="${this.longitude}" .radius="${this.radius}"></leaflet-map>
    `;
  }
}

customElements.define('search-view', SearchView);
