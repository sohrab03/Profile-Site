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
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.key === "1") {
    window.location.href = "index.html"; // Go to About Me
  } else if (event.altKey && event.key === "2") {
    window.location.href = "technical.html"; // Go to Technical Interests
  } else if (event.altKey && event.key === "3") {
    window.location.href = "portfolio.html"; // Go to Portfolio
  } else if (event.altKey && event.key === "4") {
    window.location.href = "project.html"; // Go to Project Details
  }
});
