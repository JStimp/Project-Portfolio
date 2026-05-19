// Project data for the homepage cards.
//
// This file is JavaScript instead of strict JSON because normal JSON does not
// allow comments. Keep the shape below, edit the text values, and the homepage
// will rebuild the project cards automatically.
//
// How to reorder projects:
// Change the `order` number. Lower numbers show first. For example, Project 04
// is order 2 below, so it appears second.
//
// How to add a new project:
// 1. Copy one full project object, including the opening `{` and closing `}`.
// 2. Paste it before the final `];`.
// 3. Change `id`, `order`, `title`, `url`, and the other text fields.
// 4. Create the matching project folder/page, such as:
//    projects/project-name-06/index.html
// 5. If you have no image yet, leave `image` as an empty string.
//
// How to temporarily hide a project:
// Set `featured` to false. The page will skip it.

window.portfolioProjects = [
  {
    id: "project-name-01",
    order: 1,
    featured: true,
    title: "[Project Name 01]",
    tag: "[Course / Lab / Team]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat magna at sapien facilisis, sed pulvinar erat consequat.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    outcome: "[Result / Metric / Deliverable]",
    image: "images/IMG_8188.JPG",
    imageAlt: "[Project Name 01] preview",
    placeholder: "[Project Image]",
    url: "projects/project-name-01/index.html"
  },
  {
    id: "project-name-04",
    order: 2,
    featured: true,
    title: "[Project Name 04]",
    tag: "[Course / Lab / Team]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this with a short project summary.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    outcome: "[Result / Metric / Deliverable]",
    image: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    url: "projects/project-name-04/index.html"
  },
  {
    id: "project-name-02",
    order: 3,
    featured: true,
    title: "[Project Name 02]",
    tag: "[Internship / Research / Competition]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus sapien vitae sem pretium, nec tincidunt eros suscipit.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    outcome: "[Result / Metric / Deliverable]",
    image: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    url: "projects/project-name-02/index.html"
  },
  {
    id: "project-name-03",
    order: 4,
    featured: true,
    title: "[Project Name 03]",
    tag: "[Capstone / Personal Build]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ligula vel ipsum bibendum tincidunt non at erat.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    outcome: "[Result / Metric / Deliverable]",
    image: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    url: "projects/project-name-03/index.html"
  },
  {
    id: "project-name-05",
    order: 5,
    featured: true,
    title: "[Project Name 05]",
    tag: "[Capstone / Personal Build]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this with a short project summary.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    outcome: "[Result / Metric / Deliverable]",
    image: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    url: "projects/project-name-05/index.html"
  }
];
