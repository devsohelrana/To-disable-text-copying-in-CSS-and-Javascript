// Add event listener for copy event
document.addEventListener("copy", function (event) {
  event.preventDefault(); // Prevent default copy behavior
  toast("Copied disabled!"); // Call toast function with new message
});

// Event listener to detect right-click
window.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Prevent default right-click menu
  toast("Right-click disabled!"); // Call toast function with new message
});

// Disable F12 keypress event
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 123) {
    e.preventDefault();
    toast("F12 Key disabled!"); // Call toast function with new message
  }
});

// Function to show toast message with custom message
function toast(message) {
  // Create toast container element
  var toastContainer = document.createElement("div");
  toastContainer.classList.add("toast");

  // Create bell icon element
  var icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-bell");

  // Create paragraph element for message
  var messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;

  // Append icon and message elements to toast container
  toastContainer.appendChild(icon);
  toastContainer.appendChild(messageParagraph);

  // Append toast container to body
  document.body.appendChild(toastContainer);

  // Remove toast after a certain time 3s
  setTimeout(function () {
    toastContainer.classList.add("hide");
    setTimeout(function () {
      document.body.removeChild(toastContainer);
    }, 100);
  }, 3000);
}
