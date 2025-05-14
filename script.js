// Back-to-Top Button: Smooth Scrolling
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/Hide Back-to-Top Button on Scroll
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('backToTop');
  if (document.documentElement.scrollTop > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
