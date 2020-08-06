let template = document.createElement('template');
template.innerHTML = `
<nav>
    <ul>
        <button route="a">a</button>
        <button route="b">a</button>
        <button route="c">b</button>
    </ul>
</nav>
`
class NavBar extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = template;
    }
}

window.customElements.define('nav-bar', NavBar)