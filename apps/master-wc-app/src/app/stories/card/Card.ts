//NOTE - Autonomous Custom Element

export class CardComponent extends HTMLElement {
  constructor() {
    super(); // ? establish the proper prototype chain

    // ? instantiate the shadow DOM
    // ? attachShadow() open will returns a ShadowRoot object
    // ? allowing access to the shadow DOM via JavaScript
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // ? HTML template = Reuseable DOM tree that are not parsed until they are instantiated.
    const template = document.createElement('template');
    template.innerHTML = `
      <span>Hello world</span>
    `
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// ? Register the custom element with the CustomElementRegistry
customElements.define('wc-card', CardComponent); // ! kebab-case with at least one dash
