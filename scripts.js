function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  element.textContent = text;
  return element;
}

function createProjectCard(project) {
  const card = document.createElement("a");
  card.className = "project-card project-preview";
  card.href = project.url;
  card.setAttribute("aria-label", `Open ${project.title} project page`);

  const imageWrap = document.createElement("div");
  imageWrap.className = project.image
    ? "project-image project-image--photo"
    : "project-image project-image--placeholder";

  if (project.image) {
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.imageAlt || `${project.title} preview`;
    imageWrap.appendChild(image);
  } else {
    imageWrap.appendChild(createTextElement("span", "", project.placeholder || "[Project Image]"));
  }

  const overlay = document.createElement("div");
  overlay.className = "project-preview-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.appendChild(createTextElement("strong", "project-preview-title", project.title));
  overlay.appendChild(createTextElement("span", "project-preview-cta", "View project"));
  imageWrap.appendChild(overlay);

  const content = document.createElement("div");
  content.className = "project-content";
  content.appendChild(createTextElement("p", "project-tag", project.tag));
  content.appendChild(createTextElement("h3", "", project.title));
  content.appendChild(createTextElement("p", "", project.description));

  const details = document.createElement("ul");
  details.className = "project-details";

  const tools = Array.isArray(project.tools) ? project.tools.join(", ") : project.tools;
  [
    ["Role", project.role],
    ["Tools", tools],
    ["Outcome", project.outcome]
  ].forEach(([label, value]) => {
    const item = document.createElement("li");
    const strong = createTextElement("strong", "", `${label}:`);
    item.appendChild(strong);
    item.append(` ${value}`);
    details.appendChild(item);
  });

  content.appendChild(details);
  card.appendChild(imageWrap);
  card.appendChild(content);

  return card;
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  if (!grid || !window.portfolioProjects) {
    return;
  }

  const projects = window.portfolioProjects
    .filter((project) => project.featured !== false)
    .sort((first, second) => first.order - second.order);

  grid.replaceChildren(...projects.map(createProjectCard));
}

renderProjects();
