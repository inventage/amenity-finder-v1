import { directive } from 'lit-html';

const trackedValues = [];

export const lazyLoad = directive((importPromise, value) => part => {
  // A TemplateResult object will always have the `strings` property set
  const { strings } = value;

  // We track promises for each string representation of a value
  const valueIdentifier = strings ? `${strings.join('')}` : `${value}`;

  if (!trackedValues.includes(valueIdentifier)) {
    trackedValues.push(valueIdentifier);

    const event = new CustomEvent('pending-state', {
      composed: true,
      bubbles: true,
      detail: { promise: importPromise },
    });

    part.startNode.parentNode.dispatchEvent(event);
  }

  part.setValue(value);
});
