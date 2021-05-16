import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function App({ sample }) {
    return html`
        <ul>
            ${sample.map((x) => `<li>${x}</li>`)}
        </ul>
        <button onclick="dispatch('ADD', 'Dispatch Successfully')">
            Click Me
        </button>
    `;
}

export default connector(App);
