const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const response = document.getElementById("response");

// Messages for the "No" button
const noMessages = [
  "Please rethink...",
  "Are you sure?",
  "Pretty please?",
  "Pookie, say yes!",
  "I'll cry if you say no...",
  "Just click yes already!",
];

let noClickCount = 0;

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
  response.classList.remove("hidden");
  yesButton.style.display = "none";
  noButton.style.display = "none";
});

// Handle "No" button click
noButton.addEventListener("click", () => {
  // Increase size of "Yes" button
  const currentYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentYesSize + 5}px`;

  // Decrease size of "No" button
  const currentNoSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  noButton.style.fontSize = `${currentNoSize - 2}px`;

  // Change "No" button text
  noButton.textContent = noMessages[noClickCount % noMessages.length];
  noClickCount++;
});