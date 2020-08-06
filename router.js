let current = window.location.pathname
import A from './a.js';
import B from './b.js';
// import C from './c.js';

const routes = [
    { path: "/a", temp: '<a-test-tag> </a-test-tag>' }, 
    { path: "/b", temp: '<b-test-tag> </b-test-tag>' }
    // { path: "/", temp: C }
]

let path = ''
const app = document.getElementById('app');

for (let i = 0; i < routes.length; i++) {
    const element = routes[i].path;
    if (element.path===current) {
       app.innerHTML = element.temp; 
    }
}
