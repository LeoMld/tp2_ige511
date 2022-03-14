import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function component() {
    const element = document.createElement('div');
    element.classList.add('bg-gray');

    return element;
}

document.body.appendChild(component());