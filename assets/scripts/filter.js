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
