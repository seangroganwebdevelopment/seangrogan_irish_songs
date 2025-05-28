function toggleStory(baseId) {
  const content = document.getElementById(`${baseId}-story-full`);
  const link = document.getElementById(`${baseId}-toggle-link`);

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    link.innerText = "Read less";
  } else {
    content.style.display = "none";
    link.innerText = "Read more";
    window.scrollTo({ top: link.offsetTop - 200, behavior: "smooth" });
  }
}
