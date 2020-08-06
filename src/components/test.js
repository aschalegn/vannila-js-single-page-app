let template = document.createElement('template');
template.innerHTML = `<h1>Test Comp tag</h1>`;

class Testing extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['str']
    }

    get str() {
        this.getAttribute('str')
    }

    set str(val) {
        this.setAttribute('str', val)
    }

    connectedCallback() {
        this.innerHTML = this.getAttribute('str');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.connectedCallback();
    }
}

window.customElements.define('testing-tag', Testing);