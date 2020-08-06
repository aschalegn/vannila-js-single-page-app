require('./components/test');

const app = document.getElementById('app');
const rout = document.querySelectorAll('[route]');
for (let i = 0; i < rout.length; i++) {
    const element = rout[i];
    element.addEventListener('click', (e => {
        const r = e.target.innerText
        console.log(r);
        history.pushState("a.html", "title 1", r);
        render();
    }));
}

const render = () => {
    if (window.location.pathname == "/first") {
        app.innerHTML = `<testing-tag str="test"> </testing-tag`;
    } else {
        app.innerHTML = `<testing-tag str="test for second value"> </testing-tag`;
    }
}

window.addEventListener('load', e => {
    console.log("loaded");
    render();
})

