import { attach, connect } from "./store.js";

attach(() => "<div>hello</div>", document.querySelector("#root"));
