export default {
  structure: {
    tag: "main",
    class: "home-tab",
    children: [
      {
        tag: "section",
        class: "taglines",
        children: [
          {
            tag: "p",
            text: "JOIN THE FEAST.",
          },
          {
            tag: "p",
            class: "taglines",
            text: "SATE YOUR HUNGER.",
          },
          {
            tag: "p",
            text: "ENTER",
          },
          {
            tag: "p",
            text: "THE QUIET BOX",
          },
        ],
      },
      {
        tag: "nav",
        class: "home-tabs",
        children: [
          {
            tag: "ul",
            children: [
              {
                tag: "li",
                children: [
                  {
                    tag: "button",
                    class: "menu-btn",
                    text: "MENU",
                  },
                ],
              },
              {
                tag: "li",
                children: [
                  {
                    tag: "button",
                    class: "contact-btn",
                    text: "CONTACT",
                  },
                ],
              },
              {
                tag: "li",
                children: [
                  {
                    tag: "button",
                    class: "archive-btn",
                    text: "ARCHIVE",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tag: "section",
        class: "info-container",
        children: [
          {
            tag: "a",
            class: "scroll-down-btn",
          },
          {
            tag: "h1",
            class: "info-header",
            text: "= ABOUT =",
          },
          {
            tag: "p",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est accusantium. Unde maxime sunt optio maiores nostrum odit numquam ullam! Inventore doloremque minus obcaecati sapiente dignissimos, ducimus repellat perspiciatis hic.",
          },
          {
            tag: "p",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est accusantium. Unde maxime sunt optio maiores nostrum odit numquam ullam! Inventore doloremque minus obcaecati sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est accusantium. Unde maxime sunt optio maiores nostrum odit numquam ullam! Inventore doloremque minus obcaecati sapiente dignissimos, ducimus repellat perspiciatis hic. dignissimos, ducimus repellat perspiciatis hic.",
          },
          {
            tag: "p",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est accusantium. Unde maxime sunt optio maiores nostrum odit numquam ullam! Inventore doloremque minus obcaecati sapiente dignissimos, ducimus repellat perspiciatis hic.",
          },
          {
            tag: "img",
            class: "interior-img",
          },
          {
            tag: "p",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est accusantium. Unde maxime sunt optio maiores nostrum odit numquam ullam! Inventore doloremque minus obcaecati sapiente dignissimos, ducimus repellat perspiciatis hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est accusantium. Unde maxime sunt optio maiores nostrum odit numquam ullam! Inventore doloremque minus obcaecati sapiente dignissimos, ducimus repellat perspiciatis hic.",
          },
          {
            tag: "ul",
            children: [
              {
                tag: "li",
                text: "lorem ipsum dolor",
              },
              {
                tag: "li",
                text: "lorem ipsum dolor",
              },
              {
                tag: "li",
                text: "lorem ipsum dolor",
              },
              {
                tag: "li",
                text: "lorem ipsum dolor",
              },
            ],
          },
          {
            tag: "p",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est accusantium. Unde maxime sunt optio maiores nostrum odit numquam ullam! Inventore doloremque minus obcaecati sapiente dignissimos, ducimus repellat perspiciatis hic.",
          },
          {
            tag: "p",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est accusantium. Unde maxime sunt optio maiores nostrum odit numquam ullam! Inventore doloremque minus obcaecati sapiente dignissimos, ducimus repellat perspiciatis hic.",
          },
        ],
      },
    ],
  },
  wiring() {
    const infoHeader = document.querySelector(".info-header");
    infoHeader.setAttribute("id", "info-header");

    const scrollDownBtn = document.querySelector(".scroll-down-btn");
    scrollDownBtn.setAttribute("href", "#info-header");

    const interiorImage = document.querySelector(".interior-img");
    interiorImage.setAttribute("src", "/src/images/restaurant-interior.jpg");
  },
};
/*
{
  tag: '',
  class: '',
  text: '',
  children: []
} */
