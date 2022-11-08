document.getElementById("guide").style.display = "none";

document.getElementById("guide-button").addEventListener("click", () => {
  document.getElementById("guide").style.display = "block";
});

window.dispatchEvent(new Event('resize'));