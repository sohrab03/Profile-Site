const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.classList.add("fade-in");
    }
  });
});
// Show the popup modal after 30 seconds
setTimeout(() => {
  const modal = document.getElementById("popup-modal");
  modal.style.display = "block";
}, 15000); // 30 seconds

// Close the popup modal when the close button is clicked
document.getElementById("close-modal").addEventListener("click", () => {
  const modal = document.getElementById("popup-modal");
  modal.style.display = "none";
});

// Close the popup modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  const modal = document.getElementById("popup-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
