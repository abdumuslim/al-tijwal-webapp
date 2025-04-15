interface RedirectMapping {
  path: string;
  to: string;
}

// Add new redirects here
export const redirects: RedirectMapping[] = [
  {
    path: "/presentation",
    to: "https://drive.google.com/file/d/1roHSzmkyR2WWzLHa7vIXKW-CsXsFn9ZL/view?usp=sharing",
  },
  {
    path: "/brand",
    to: "https://altijwal-my.sharepoint.com/:f:/g/personal/contact_al-tijwal_com/Ejhx937V9ItEgjIMoqs8x2gBp76rMM7FJhjJtTwWlx7ioA?e=gnxSYj",
  },
  // Example for future redirects:
  // {
  //   path: "/another-link",
  //   to: "https://example.com/another-target",
  // },
];