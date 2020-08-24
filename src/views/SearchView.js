import { html, LitElement } from 'lit-element';

import '@material/mwc-button';
import '@material/mwc-textfield';

export class SearchView extends LitElement {
  render() {
    return html`
      <h1>Search</h1>

      <mwc-textfield label="Latitude"></mwc-textfield>
      <mwc-textfield label="Longitude"></mwc-textfield>
      <mwc-textfield label="Radius (m)"></mwc-textfield>

      <mwc-button outlined label="Locate Me" icon="my_location"></mwc-button>
      <mwc-button raised label="Search"></mwc-button>
    `;
  }
}

customElements.define('search-view', SearchView);
