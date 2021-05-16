import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function App({ product }) {
    return html`
        <ul>
            <li>
                <h3>${product.name}</h3>
                <h2>${product.description}</h2>
                <p>${product.price}</p>
            </li>
        </ul>
    `;
}

export default connector(App);
