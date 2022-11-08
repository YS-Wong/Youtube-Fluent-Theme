document.getElementById("guide").style.display = "none";

document.getElementById("guide-button").addEventListener("click", () => {
  document.getElementById("guide").style.display = "block";
});

document.addEventListener('load', () => {
  console.log("loaded");
  window.dispatchEvent(new Event('resize'));
});

document.addEventListener('readystatechange', event => {
  console.log("document.readyState: ", document.readyState);
  switch (document.readyState) {
    case "loading":
      console.log("document.readyState: ", document.readyState,
        `- The document is still loading.`
      );
      break;
    case "interactive":
      console.log("document.readyState: ", document.readyState,
        `- The document has finished loading DOM. `,
        `- "DOMContentLoaded" event`
      );
      break;
    case "complete":
      console.log("document.readyState: ", document.readyState,
        `- The page DOM with Sub-resources are now fully loaded. `,
        `- "load" event`
      );
      break;
  }
});