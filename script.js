let currentIndex = 0;
let galleryImages = [];

// Initialize image array on DOM load
document.addEventListener('DOMContentLoaded', () => {
  galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
});

function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  
  // Find current image index in array
  currentIndex = galleryImages.indexOf(imgElement);
  updateLightboxImage();
  
  lightbox.classList.add('active');
}

function updateLightboxImage() {
  const lightboxImg = document.getElementById('lightbox-img');
  const currentImg = galleryImages[currentIndex];
  
  lightboxImg.src = currentImg.src;
  lightboxImg.alt = currentImg.alt;
}

function changeImage(direction, event) {
  // Prevent event from triggering closeLightbox on overlay
  if (event) event.stopPropagation();
  
  currentIndex += direction;
  
  // Wrap around logic
  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  } else if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }
  
  updateLightboxImage();
}

function closeLightbox(event) {
  if (event.target.id === 'lightbox' || event.target.classList.contains('close-btn')) {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
  }
}

// Keyboard navigation (Arrow keys and Escape)
document.addEventListener('keydown', function (event) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox.classList.contains('active')) return;

  if (event.key === 'ArrowLeft') {
    changeImage(-1);
  } else if (event.key === 'ArrowRight') {
    changeImage(1);
  } else if (event.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});
