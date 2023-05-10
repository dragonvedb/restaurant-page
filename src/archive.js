import { renderElement } from "./index.js";

export default {
  structure: {
    tag: "main",
    class: "archive-tab",
    children: [
      {
        tag: "h1",
        text: "= ARCHIVE =",
      },
      {
        tag: "section",
        class: "archive-container",
        children: [],
      },
    ],
  },
  archiveData: [
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
    {
      title: "Lorem ipsum",
      lead: "Lorem ipsum dolor etu est tallum dolor o ipulum delle istum",
    },
  ],
  wiring() {
    function createArchiveCard(cardData) {
      const card = {
        tag: "article",
        class: "archive-card",
        children: [
          {
            tag: "div",
            class: "archive-placeholder",
          },
          {
            tag: "h2",
            text: cardData.title,
          },
          {
            tag: "p",
            text: cardData.lead,
          },
        ],
      };

      return card;
    }

    this.archiveData.forEach((cardData) =>
      renderElement(
        createArchiveCard(cardData),
        document.querySelector(".archive-container")
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
