// Constants: 1 hour on Miller's Planet = 7 Earth years
const MILLER_RATIO = 7 * 365.25 * 24 * 60 * 60; // Seconds in 7 Earth years
const MOVIE_RELEASE_DATE = new Date('2014-11-07T00:00:00Z'); // Release Date

// Function to update the Miller's Planet Time
function updateMillerTime() {
  const now = new Date(); // Current Earth time
  const earthSecondsElapsed = Math.floor((now - MOVIE_RELEASE_DATE) / 1000); // Total Earth seconds

  // Convert Earth seconds into Miller's time in hours
  const millerSecondsElapsed = earthSecondsElapsed / MILLER_RATIO;
  const millerHours = Math.floor(millerSecondsElapsed); // Full hours passed
  const millerMinutes = Math.floor((millerSecondsElapsed % 1) * 60); // Remaining minutes

  // Update HTML elements (if needed)
  document.getElementById('hours').textContent = millerHours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = millerMinutes.toString().padStart(2, '0');
}

// Call the update function every second
setInterval(updateMillerTime, 1000);
