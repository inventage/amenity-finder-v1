import { delay } from '../utils/helpers.js';

/**
 * Mixin for implementing the pending-state protocol
 *
 * @see https://github.com/justinfagnani/pending-state-protocol
 *
 * @property __hasPendingChildren
 * @property __pendingCount
 */
export const PendingContainer = (base, delayPromise = 0) =>
  class extends base {
    static get properties() {
      return {
        __hasPendingChildren: { type: Boolean },
        __pendingCount: { type: Number },
      };
    }

    constructor() {
      super();

      this.__hasPendingChildren = false;
      this.__pendingCount = 0;

      this.addEventListener('pending-state', async e => {
        this.__hasPendingChildren = true;
        this.__pendingCount += 1;
        await e.detail.promise;
        await delay(delayPromise); // Optional delay
        this.__pendingCount -= 1;
        this.__hasPendingChildren = this.__pendingCount !== 0;
      });
    }
  };
