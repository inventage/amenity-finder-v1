import { html, LitElement } from 'lit-element';

import '@material/mwc-button';
import '@material/mwc-textfield';

export class SearchView extends LitElement {
  render() {
    return html`Search…`;
  }
}

customElements.define('search-view', SearchView);
