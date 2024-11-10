function toggleExpand(container) {
  container.classList.toggle("expanded");
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.stories-container');
  const file = container.getAttribute('data-file');

  if (file) {
      fetch(file)
          .then(response => response.text())
          .then(data => {
              container.innerHTML = data;
          })
          .catch(error => console.error(`Error loading ${file}:`, error));
  }
});
