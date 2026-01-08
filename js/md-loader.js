async function loadMarkdown(file) {
  const res = await fetch(`content/${file}`);
  const content = await res.text();

  // 🔐 If HTML detected → render as-is
  if (content.trim().startsWith("<")) {
    document.getElementById("md-view").innerHTML = content;
    return;
  }

  // 📘 Very simple markdown (safe)
  let html = content
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*?)\*/gim, "<i>$1</i>")
    .replace(/\n/g, "<br>");

  document.getElementById("md-view").innerHTML = html;
}