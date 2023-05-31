const image = document.getElementById("image");
const modalBackground = document.getElementById("modalBackground");
const modalImage = document.getElementById("modalImage");
const closeBox = document.getElementById("closeBox");

image.addEventListener("click", function() {
  modalBackground.style.display = "block";
  modalImage.src = this.src;
});

closeBox.addEventListener("click", function() {
  modalBackground.style.display = "none";
});

modalBackground.addEventListener("click", function(event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = "none";
  }
});
