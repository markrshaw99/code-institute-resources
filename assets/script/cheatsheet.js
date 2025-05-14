// Copy Code Functionality
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const codeBlock = button.nextElementSibling.querySelector('code');
    if (codeBlock) {
      const codeText = codeBlock.innerText.trim();
      navigator.clipboard.writeText(codeText).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Error copying text: ', err);
      });
    }
  });
});

// Back to Top Button Functionality
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('backToTop');
  if (document.documentElement.scrollTop > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
