function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
}

function isLoggedIn() {
  return getUser() !== null;
}
const routes = {
  home: "overview.md",
  auth: "auth.md",
  rbac: "rbac.md",
  profile: "profile.md",
  progress: "progress.md",
  notes: "notes.md",
  watch: "watch-history.md",
  chat: "messaging.md",
  notice: "announcements.md",
  pay: "payments.md",
  admin: "admin.md"
};

function handleRoute() {
  const hash = location.hash.replace("#", "") || "home";
  const user = getUser();

  // 🔒 Not logged in → only auth page allowed
  if (!user && hash !== "auth") {
    location.hash = "#auth";
    return;
  }

  // 👑 Admin guard
  if (hash === "admin" && user?.role !== "admin") {
    location.hash = "#home";
    return;
  }

  // ✅ Valid route
  if (routes[hash]) {
    loadMarkdown(routes[hash]);
  }
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);