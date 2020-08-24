import { html, LitElement } from 'lit-element';

export class ResultsView extends LitElement {
  static get properties() {
    return {
      latitude: { type: String },
      longitude: { type: String },
      radius: { type: Number },
    };
  }

  render() {
    return html`Results…`;
  }
}

customElements.define('results-view', ResultsView);
