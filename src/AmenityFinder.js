import { LitElement, html, css } from 'lit-element';
import page from 'page';

import '@material/mwc-drawer';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

import './views/AboutView.js';
import './views/HomeView.js';
import './views/ResultsView.js';
import './views/SearchView.js';

export class AmenityFinder extends LitElement {
  static get properties() {
    return {
      showSidebar: { type: Boolean },
      currentView: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
      }
    `;
  }

  constructor() {
    super();
    this.showSidebar = false;
    this.currentView = 'home';

    this._initializeRoutes();
  }

  render() {
    return html`
      <mwc-drawer
        hasHeader
        type="modal"
        .open="${this.showSidebar}"
        @MDCDrawer:closed="${() => {
          this.showSidebar = false;
        }}"
      >
        <span slot="title">Navigation</span>
        <mwc-list>
          <mwc-list-item @click="${() => this._navigateToUrl('/')}">Home</mwc-list-item>
          <mwc-list-item @click="${() => this._navigateToUrl('/search')}">Search</mwc-list-item>
          <mwc-list-item @click="${() => this._navigateToUrl('/results')}">Results</mwc-list-item>
          <mwc-list-item @click="${() => this._navigateToUrl('/about')}">About</mwc-list-item>
        </mwc-list>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button
              icon="menu"
              slot="navigationIcon"
              @click="${() => {
                this.showSidebar = !this.showSidebar;
              }}"
            ></mwc-icon-button>
            <div slot="title">Title</div>
          </mwc-top-app-bar>
          <main>
            ${this._renderCurrentView()}
          </main>
        </div>
      </mwc-drawer>
    `;
  }

  _renderCurrentView() {
    switch (this.currentView) {
      case 'home':
        return html`<home-view></home-view>`;
      case 'search':
        return html`<search-view></search-view>`;
      case 'results':
        return html`<results-view></results-view>`;
      case 'about':
        return html`<about-view></about-view>`;
      default:
        return ``;
    }
  }

  _initializeRoutes() {
    page('/', () => {
      this.currentView = 'home';
    });
    page('/about', () => {
      this.currentView = 'about';
    });
    page('/results', () => {
      this.currentView = 'results';
    });
    page('/search', () => {
      this.currentView = 'search';
    });
    page();
  }

  // eslint-disable-next-line class-methods-use-this
  _navigateToUrl(url) {
    page(url);
  }
}

customElements.define('amenity-finder', AmenityFinder);
