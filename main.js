import "./style.css";
import "mathlive/dist/mathlive-fonts.css";
import * as mathlive from "mathlive";

const app = document.querySelector("#app");
app.innerHTML = `
  <h2>Reproduce your Mathlive Bug / Issue below:</h2>
  <a href="https://cortexjs.io/docs/mathlive/" target="_blank">Documentation</a>
  <div id="math-input" class="mathfield-element"></div>
`;

const mfe = new mathlive.MathfieldElement();
mfe.value = `No tooltips!`;
mfe.setOptions({ virtualKeyboardMode: 'onfocus'});
const div = document.querySelector("#math-input");
div.appendChild(mfe);
