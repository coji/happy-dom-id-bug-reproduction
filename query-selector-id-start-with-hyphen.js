const { Window } = require("happy-dom");

const window = new Window();
const document = window.document;

document.body.innerHTML = '<div id="--test--">test!</div>';
const divByGetElementById = document.getElementById("--test--");
const divByQuerySelector = document.querySelector("#--test--");

console.log(divByGetElementById?.outerHTML ?? "Not found"); // <div id="--test--">test</div>
console.log(divByQuerySelector?.outerHTML ?? "Not found"); // Not found *bug*
