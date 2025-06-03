// Element Selection - [main img | caption area | thumbnail imgs | nav bttns]
const mainImage = document.getElementById("main-image");
const caption = document.getElementById("caption");
const thumbnails = document.querySelectorAll(".thumb");
// Nav bttn's
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// --Set Index to 0--
let currentIndex = 0;

// IMG data collection -- [img url-src | img caption-alt | lat&long data-lng data lat]
// thumbnail images are converted to array of obects
const images = Array.from(thumbnails).map((thumb) => ({
  src: thumb.src,
  alt: thumb.alt,
  lat: thumb.dataset.lat,
  lng: thumb.dataset.lng,
}));

// IMG & Map Update function
function updateSlide(index) {
  const { src, alt, lat, lng } = images[index];
  // update main img
  mainImage.src = src;
  caption.textContent = alt;

  // Changes Thumbnail class based on click
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });

  // Update Google maps frame- setting src to maps url using imgs lat & long from [img array]
  const mapFrame = document.getElementById("map-frame");
  if (mapFrame && lat && lng) {
    mapFrame.src = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
  }
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateSlide(currentIndex);
  });
});

// Nav bttn prev
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide(currentIndex);
});

// Nav bttn next
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide(currentIndex);
});

// Initial load
updateSlide(currentIndex);
