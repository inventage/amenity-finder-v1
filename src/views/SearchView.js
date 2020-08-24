import { css, html, LitElement } from 'lit-element';

import '@material/mwc-button';
import '@material/mwc-textfield';
import '@inventage/leaflet-map/dist/leaflet-map.js';

import { canGeolocate, detectUserLocation } from '../utils/geolocation.js';

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

      <mwc-textfield label="Latitude" .value="${this.latitude}" @keyup="${e => (this.latitude = e.target.value)}"></mwc-textfield>
      <mwc-textfield label="Longitude" .value="${this.longitude}" @keyup="${e => (this.longitude = e.target.value)}"></mwc-textfield>
      <mwc-textfield label="Radius (m)" .value="${this.radius}" @keyup="${e => (this.radius = e.target.value)}"></mwc-textfield>

      <mwc-button outlined label="Locate Me" icon="my_location" @click="${this._handleLocateMeClick}" .disabled="${!canGeolocate()}"></mwc-button>
      <mwc-button raised label="Search"></mwc-button>

      <leaflet-map
        .latitude="${this.latitude}"
        .longitude="${this.longitude}"
        .radius="${this.radius}"
        @center-updated="${this._updateLatitudeLongitudeFromMap}"
        updatecenteronclick
      ></leaflet-map>
    `;
  }

  async _handleLocateMeClick(e) {
    e.target.blur();

    try {
      const {
        coords: { latitude, longitude },
      } = await detectUserLocation();

      this.latitude = latitude;
      this.longitude = longitude;
    } catch (err) {
      console.error(err);
    }
  }

  _updateLatitudeLongitudeFromMap(e) {
    const {
      detail: { latitude, longitude },
    } = e;

    if (!latitude || !longitude) {
      return;
    }

    this.latitude = latitude;
    this.longitude = longitude;
  }
}

customElements.define('search-view', SearchView);
