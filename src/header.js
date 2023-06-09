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
  ],
};

/*
{
  tag: '',
  class: '',
  text: '',
  children: []
} */
