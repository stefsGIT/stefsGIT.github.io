// stars.js  —  fills the .twinkles layer with little twinkling dots.
// This runs in the visitor's browser when the page loads.

// 1) Grab the empty layer from the page by its id.
const layer = document.getElementById("twinkles");

// 2) How many stars to make.
const STAR_COUNT = 90;

// 3) Loop: build one star, that many times.
for (let i = 0; i < STAR_COUNT; i++) {
  // Make a new empty <span> element in memory.
  const star = document.createElement("span");
  star.className = "star";   // give it the .star CSS style

  // Random size between 1 and 3 pixels.
  const size = 1 + Math.random() * 2;

  // Random position anywhere on the screen (0%–100%).
  const top = Math.random() * 100;
  const left = Math.random() * 100;

  // Random twinkle timing so they don't blink in sync.
  const delay = Math.random() * 4;      // seconds before it starts
  const duration = 2 + Math.random() * 3; // 2–5 seconds per blink

  // Apply all of that to the star's inline style.
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.top = top + "%";
  star.style.left = left + "%";
  star.style.animationDelay = delay + "s";
  star.style.animationDuration = duration + "s";

  // 4) Put the finished star into the page.
  layer.appendChild(star);
}
