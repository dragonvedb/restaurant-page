import homeTab from "./home.js";
import mythosTab from "./mythos.js";
import menuTab from "./menu.js";
import contactTab from "./contact.js";
import header from "./header.js";
import footer from "./footer.js";
import "./styles.css";

function test() {
  console.log("testing");
}

/* function createElement(tag, parentElem, ...elemClasses) {
  const newElement = document.createElement(tag);

  for (const elemClass of elemClasses) {
    newElement.classList.add(elemClass);
  }

  parentElem.appendChild(newElement);
  return newElement;
} */

export function renderElement(elem, parentElem) {
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

contentContainer.addEventListener("click", (e) => {
  const target = e.target.classList;
  if (e.target.tagName === "BUTTON") {
    contentContainer.innerHTML = "";
    window.scrollTo(0, 0);
    if (target.contains("logo")) {
      renderElement(homeTab.structure, contentContainer);
      homeTab.wiring();
    } else if (target.contains("mythos-btn")) {
      renderElement(header, contentContainer);
      renderElement(mythosTab.structure, contentContainer);
      mythosTab.wiring();
    } else if (target.contains("menu-btn")) {
      renderElement(header, contentContainer);
      renderElement(menuTab.structure, contentContainer);
      menuTab.wiring();
    } else if (target.contains("contact-btn")) {
      renderElement(header, contentContainer);
      renderElement(contactTab.structure, contentContainer);
      contactTab.wiring();
    }
    renderElement(footer, contentContainer);
  }
});

renderElement(homeTab.structure, contentContainer);
homeTab.wiring();
renderElement(footer, contentContainer);

console.log("is it working for real no cap?");
