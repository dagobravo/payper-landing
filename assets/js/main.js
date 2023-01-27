function toggleMenu() {
  const menu = document.getElementById('menu-trigger');
  const offCanvas = document.getElementById('off-canvas');
  const offCanvasOverlay = document.getElementById('off-canvas-overlay');
  const classes = menu.classList;
  if (classes.contains('active')) {
    menu.classList.remove('active');
    offCanvas.classList.remove('active');
    offCanvasOverlay.classList.remove('active');
  } else {
    menu.classList.add('active');
    offCanvas.classList.add('active');
    offCanvasOverlay.classList.add('active');
  }
}

// Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
});

/**
 * Header animation: Fade in from left.
 */
const animatedHeadersLeft = document.querySelectorAll('.animated-header-left');
animatedHeadersLeft.forEach((el) => observer.observe(el));

const animatedHeadersRight = document.querySelectorAll('.animated-header-right');
animatedHeadersRight.forEach((el) => observer.observe(el));

/**
 * Vertical text animation: Line height transition.
 * Applied in paragraphs.
 */
const animatedText = document.querySelectorAll('.animated-text');
animatedText.forEach((el) => observer.observe(el));

/**
 * Number animation: Zoom when going out of intersection.
 * Elements: Numbers in the page.
 */

/**
 * Image animations: Fade in from left when intersecting.
 * Elements: Big images in the site.
 */
const animatedImagesLtoR = document.querySelectorAll('.animated-image-left');
animatedImagesLtoR.forEach((el) => observer.observe(el));

const animatedImagesRtoL = document.querySelectorAll('.animated-image-right');
animatedImagesRtoL.forEach((el) => observer.observe(el));

const animatedImagesBottom = document.querySelectorAll('.animated-image-bottom');
animatedImagesBottom.forEach((el) => observer.observe(el));
