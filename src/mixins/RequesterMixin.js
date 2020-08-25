/**
 * Requester can request instances by a given key.
 */
export const Requester = Base =>
  class extends Base {
    requestInstance(key) {
      const event = new CustomEvent('request-instance', {
        detail: { key },
        bubbles: true,
        composed: true,

        // Provider should be able to cancel any further event propagation
        cancelable: true,
      });

      this.dispatchEvent(event);

      const { instance } = event.detail;
      return instance;
    }
  };
