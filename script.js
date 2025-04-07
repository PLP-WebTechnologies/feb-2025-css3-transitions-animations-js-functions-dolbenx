// Get DOM elements
const animateButton = document.getElementById('animateButton');
const storePreferencesButton = document.getElementById('storePreferences');
const messageDiv = document.getElementById('message');

// Trigger animation when button is clicked
animateButton.addEventListener('click', () => {
  animateButton.classList.add('animate');

  // After the animation ends, remove the class to allow it to be triggered again
  setTimeout(() => {
    animateButton.classList.remove('animate');
  }, 1000);
});

// Store user preferences in localStorage
storePreferencesButton.addEventListener('click', () => {
  const userPreference = { color: 'green', fontSize: '18px' };
  localStorage.setItem('userPreferences', JSON.stringify(userPreference));

  // Show message to the user
  messageDiv.textContent = 'Preferences stored successfully!';
});

// Retrieve user preferences from localStorage and apply them
window.addEventListener('load', () => {
  const storedPreferences = localStorage.getItem('userPreferences');
  if (storedPreferences) {
    const preferences = JSON.parse(storedPreferences);
    messageDiv.textContent = `Welcome back! Your stored preferences: color: ${preferences.color}, font size: ${preferences.fontSize}`;
  }
});
