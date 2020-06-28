const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    fullImg.classList.add("open");
    // change image and text dynamically
    const originalSrc = preview.getAttribute("data-original");
    // console.log(originalSrc);
    fullImg.src = `./full/${originalSrc}`;
    const altText = preview.alt;
    // console.log(altText);
    caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});
