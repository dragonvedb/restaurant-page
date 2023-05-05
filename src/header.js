export default {
  tag: "header",
  children: [
    {
      tag: "div",
      class: "logo",
      text: "THE QUIET BOX",
    },
    {
      tag: "nav",
      class: "header-tabs",
      children: [
        {
          tag: "ul",
          children: [
            {
              tag: "li",
              children: [
                {
                  tag: "button",
                  class: "",
                  text: "MYTHOS",
                },
              ],
            },
            {
              tag: "li",
              children: [
                {
                  tag: "button",
                  class: "",
                  text: "MENU",
                },
              ],
            },
            {
              tag: "li",
              children: [
                {
                  tag: "button",
                  class: "",
                  text: "CONTACT",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

/*
{
  tag: '',
  class: '',
  text: '',
  children: []
} */
