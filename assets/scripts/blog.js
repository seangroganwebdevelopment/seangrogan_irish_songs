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
  

function filterBlogs(category) {
  const posts = document.querySelectorAll('.blog-post');

  posts.forEach(post => {
    const postCategory = post.getAttribute('data-category');
    if (category === 'all') {
      post.style.display = 'block';
    } else if (category === 'none') {
      post.style.display = 'none';
    } else {
      post.style.display = (postCategory === category) ? 'block' : 'none';
    }
  });
}

