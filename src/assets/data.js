import React from "react";
import { nanoid } from "nanoid";

export const sublinks = [
  {
    pageId: nanoid(),
    // links: "#",
    page: "Сотрудники",
    links: [
      {
        url: "#",
        label: "Все сотрудники",
        id: nanoid(),
      },
      {
        url: "#",
        label: "Добавить сотрудника",
        id: nanoid(),
      },
      {
        url: "#",
        label: "cecvcer",
        id: nanoid(),
      },
      {
        url: "#",
        label: "cecvcer",
        id: nanoid(),
      },
    ],
  },
  {
    pageId: nanoid(),
    // links: "#",
    page: "Группы",
    links: [
      {
        url: "#",
        label: "subPage1",
        id: nanoid(),
      },
      {
        url: "#",
        label: "subPage2",
        id: nanoid(),
      },
      {
        url: "#",
        label: "subPage3",
        id: nanoid(),
      },
      {
        url: "#",
        label: "subPage4",
        id: nanoid(),
      },
    ],
  },
];
