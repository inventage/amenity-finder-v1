import { directive } from 'lit-html';

export const lazyLoad = directive((importPromise, value) => part => {
  part.setValue(value);
});
