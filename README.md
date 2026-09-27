# Mission 2: Travel Gallery

A lightweight, single-page travel photo gallery built with HTML, CSS, and vanilla JavaScript.  
Users can browse thumbnail images, navigate with previous/next controls, and see each location on an embedded Google Map.

## Features

- Interactive slideshow with next/previous navigation
- Clickable thumbnail strip with active-state highlighting
- Dynamic caption updates from image metadata
- Google Maps iframe updates using each image's latitude/longitude
- Responsive layout for mobile and desktop

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6, no framework)

## Run Locally

1. Clone or download this repository.
2. Open `/home/runner/work/Mission-2/Mission-2/index.html` in your browser.

No build step or package installation is required.

## Project Structure

```text
Mission-2/
├── index.html        # Page structure and image/map metadata
├── style.css         # Styling and responsive behavior
├── script.js         # Slideshow + map update logic
└── M2-images/        # Travel images grouped by destination
```

## How It Works

- `index.html` stores image paths, captions, and map coordinates in each thumbnail (`data-lat`, `data-lng`).
- `script.js` reads all thumbnails into an image data array.
- `updateSlide()` updates the main image, caption, active thumbnail style, and map iframe source.

## Suggested Next Improvements

- Add keyboard navigation (`ArrowLeft` / `ArrowRight`) for accessibility.
- Add lazy loading for thumbnails to improve performance.
- Add country filters so users can jump to a destination quickly.
- Add basic automated checks (HTML/CSS linting) for quality consistency.
