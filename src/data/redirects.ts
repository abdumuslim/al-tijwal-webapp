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
  // Example for future redirects:
  // {
  //   path: "/another-link",
  //   to: "https://example.com/another-target",
  // },
];