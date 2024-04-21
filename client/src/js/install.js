const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Added an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default prompt
  event.preventDefault();
  // Save the event for later use
  // Storing it in a global variable for future use
  window.deferredPrompt = event;
});

// Click event handler for installing the PWA
butInstall.addEventListener("click", async () => {
  // Check if deferredPrompt is available
  if (window.deferredPrompt) {
    // Show the install prompt
    window.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await window.deferredPrompt.userChoice;
    // Reset the deferredPrompt
    window.deferredPrompt = null;
  }
});

// Handler for the appinstalled event
window.addEventListener("appinstalled", (event) => {
  // Perform actions after the app is installed
  console.log("App installed successfully");
  // Can also update the UI or show a confirmation message
});
