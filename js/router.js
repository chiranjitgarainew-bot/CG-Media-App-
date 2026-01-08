const routes = {
  home: "home.md",
  class9: "class9.md",
  class10: "class10.md",
  info: "info.md"
};

function handleRoute() {
  const hash = location.hash.replace("#", "") || "home";
  if (routes[hash]) {
    loadMarkdown(routes[hash], "md-view");
  }
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);