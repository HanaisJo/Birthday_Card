function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  lightboxImg.src = imgElement.src;
  lightboxImg.alt = imgElement.alt;
  lightbox.classList.add('active');
}

function closeLightbox(event) {
  // Close when clicking the background overlay or the 'X' button
  if (event.target.id === 'lightbox' || event.target.classList.contains('close-btn')) {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
  }
}

// Close lightbox on 'Escape' key press
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
  }
});
