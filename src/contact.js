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
            tag: "section",
            class: "contact-card",
            text: "",
            children: [
              {
                tag: "h2",
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
                tag: "h2",
                text: "Contact",
              },
              {
                tag: "p",
                text: "+7 *** ***-**-** (for reservatoins)",
              },
              {
                tag: "p",
                text: "+7 *** ***-**-** (for business inquiries)",
              },
              {
                tag: "p",
                text: "********@fakeemail.com",
              },
            ],
          },
        ],
      },
      {
        tag: "p",
        class: "cta",
        text: "Do not delay. We are waiting for you, friend.",
      },
      {
        tag: "div",
        class: "reservation-btn",
        text: "MAKE A RESERVATION",
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
