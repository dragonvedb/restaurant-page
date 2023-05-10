export default {
  structure: {
    tag: "main",
    class: "contact-tab",
    children: [
      {
        tag: "h1",
        text: "= CONTACT =",
      },
      {
        tag: "div",
        class: "contact-container",
        text: "",
        children: [
          {
            tag: "form",
            class: "reservation-form",
            children: [],
          },
          {
            tag: "section",
            class: "contact-card",
            text: "",
            children: [
              {
                tag: "h3",
                text: "Location",
              },
              {
                tag: "p",
                text: "15/6, ****** Avenue, ***** District, Oakfield",
              },
              {
                tag: "p",
                text: "Working 10 o'clock till midnight. Closed on Mondays.",
              },
            ],
          },
          {
            tag: "section",
            class: "contact-card",
            text: "",
            children: [
              {
                tag: "h3",
                text: "Contact",
              },
              {
                tag: "p",
                text: "+7 *** ***-**-**",
              },
              {
                tag: "p",
                text: "+7 *** ***-**-**",
              },
              {
                tag: "p",
                text: "********@fakeemail.com",
              },
            ],
          },
        ],
      },
    ],
  },
  wiring() {},
};
/*
{
  tag: '',
  class: '',
  text: '',
  children: []
} */
