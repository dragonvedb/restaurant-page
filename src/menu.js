import { renderElement } from "./index.js";

export default {
  structure: {
    tag: "main",
    class: "menu-tab",
    children: [
      {
        tag: "h1",
        text: "= MENU =",
      },
    ],
  },
  menuData: [
    {
      section: "Lorem ipsum",
      dishes: [
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
      ],
    },
    {
      section: "Lorem ipso factum",
      dishes: [
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
      ],
    },
    {
      section: "Lorrefem ipum",
      dishes: [
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
        {
          name: "Lorem",
          ingredients: "Lorem ipsum dolor ino samet dolor",
          price: "66.6$",
        },
      ],
    },
  ],
  wiring() {
    function createMenuSection(sectionData) {
      const section = {
        tag: "section",
        class: "menu-section",
        children: [
          {
            tag: "h2",
            class: "menu-section-header",
            text: sectionData.section,
          },
          {
            tag: "div",
            class: "menu-section-container",
            children: [],
          },
        ],
      };

      sectionData.dishes.forEach((dishData) => {
        const dish = {
          tag: "article",
          class: "dish-card",
          children: [
            {
              tag: "div",
              class: "dish-placeholder",
            },
            {
              tag: "h3",
              text: dishData.name,
            },
            {
              tag: "p",
              text: dishData.ingredients,
            },
            {
              tag: "p",
              text: dishData.price,
            },
          ],
        };
        section.children[1].children.push(dish);
      });

      return section;
    }

    this.menuData.forEach((sectionData) =>
      renderElement(
        createMenuSection(sectionData),
        document.querySelector(".menu-tab")
      )
    );
  },
};

/*
{
  tag: '',
  class: '',
  text: '',
  children: []
} */
