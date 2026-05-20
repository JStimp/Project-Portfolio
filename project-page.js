function resolveProjectPath(path, root) {
  if (!path || /^(https?:|mailto:|#|\/)/.test(path)) {
    return path;
  }

  return `${root}${path}`;
}

function setProjectText(field, value) {
  document.querySelectorAll(`[data-project-field="${field}"]`).forEach((element) => {
    element.textContent = value || "";
  });
}

function renderProjectMedia(project, root) {
  const mediaFrame = document.querySelector("[data-project-media]");
  if (!mediaFrame) {
    return;
  }

  const imagePath = project.detailImage || project.image;

  if (imagePath) {
    const image = document.createElement("img");
    image.src = resolveProjectPath(imagePath, root);
    image.alt = project.imageAlt || `${project.title} project media`;
    mediaFrame.className = "project-media-frame";
    mediaFrame.replaceChildren(image);
    return;
  }

  const placeholder = document.createElement("span");
  placeholder.textContent = project.mediaPlaceholder || "[Add project media here]";
  mediaFrame.className = "project-media-frame project-media-frame--empty";
  mediaFrame.replaceChildren(placeholder);
}

function renderProjectPage() {
  const projectId = document.body.dataset.projectId;
  const root = document.body.dataset.projectRoot || "";
  const projects = window.portfolioProjects || [];
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return;
  }

  document.title = `${project.title} | Jared Stimpson`;
  setProjectText("tag", project.tag);
  setProjectText("title", project.title);
  setProjectText("description", project.description);
  setProjectText("story", project.story);
  setProjectText("role", project.role);
  setProjectText("tools", Array.isArray(project.tools) ? project.tools.join(", ") : project.tools);
  setProjectText("timeline", project.timeline);
  setProjectText("outcome", project.outcome);
  renderProjectMedia(project, root);
}

renderProjectPage();
