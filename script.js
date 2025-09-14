const images = document.querySelectorAll(".block1 a img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
images.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = index;
    showImage(currentIndex);
    lightbox.style.display = "flex";
  });
});

function showImage(index) {
  lightboxImg.src = images[index].src;
}
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});
function filterImages(category) {
  images.forEach(img => {
    const altText = img.alt ? img.alt.toLowerCase() : "";
    if (category === "all" || altText.includes(category)) {
      img.parentElement.style.display = "block";
    } else {
      img.parentElement.style.display = "none";
    }
  });
}
