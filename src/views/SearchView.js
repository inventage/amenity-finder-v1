import { html, LitElement } from 'lit-element';

export class SearchView extends LitElement {
  render() {
    return html`Search…`;
  }
}

customElements.define('search-view', SearchView);
