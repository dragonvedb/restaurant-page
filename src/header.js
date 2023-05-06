export default {
  tag: "header",
  children: [
    {
      tag: "button",
      class: "logo",
      text: "THE QUIET BOX",
      children: [],
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
