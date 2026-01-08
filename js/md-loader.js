async function loadMarkdown(file) {
  const res = await fetch(`content/${file}`);
  const md = await res.text();

  const html = md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*?)\*/gim, "<i>$1</i>")
    .replace(/\n/gim, "<br>");

  document.getElementById("md-view").innerHTML = html;
}