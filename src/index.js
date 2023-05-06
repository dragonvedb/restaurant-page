import homeTab from "./home.js";
import menuTab from "./menu.js";
import contactTab from "./contact.js";
import header from "./header.js";
import footer from "./footer.js";
import "./styles.css";

function test() {
  console.log("testing");
}

function createElement(tag, parentElem, ...elemClasses) {
  const newElement = document.createElement(tag);

  for (const elemClass of elemClasses) {
    newElement.classList.add(elemClass);
  }

  parentElem.appendChild(newElement);
  return newElement;
}

function renderElement(elem, parentElem) {
  const newElement = document.createElement(elem.tag);
  if (elem.class) {
    newElement.classList.add(elem.class);
  }
  if (elem.text) {
    newElement.textContent = elem.text;
  }
  if (elem.children) {
    elem.children.forEach((child) => {
      renderElement(child, newElement);
    });
  }

  parentElem.appendChild(newElement);
}

const contentContainer = document.getElementById("content");
function clear() {
  contentContainer.innerHTML = "";
}

/* contentContainer.addEventListener("click", (e) => {
  const target = e.target.classList;
  if (target.contains("logo")) {
    contentContainer.
  }
}); */

/* renderElement(header, contentContainer); */
renderElement(homeTab.structure, contentContainer);
renderElement(footer, contentContainer);

menuTab();
contactTab();
console.log("is it working for real no cap?");
