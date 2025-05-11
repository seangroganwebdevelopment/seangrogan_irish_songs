function toggleContent(id) {
    const content = document.getElementById(id);
    const link = document.getElementById(id + "-link");
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      link.innerText = "Read less";
    } else {
      content.style.display = "none";
      link.innerText = "Read more";
    }
  }
  