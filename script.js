const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const closeButton = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");

    if (!lightbox || !lightboxImage || !image) {
      return;
    }

    lightboxImage.src = item.dataset.full || image.src;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
  });
});

closeButton?.addEventListener("click", () => {
  lightbox?.close();
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.open) {
    lightbox.close();
  }
});
