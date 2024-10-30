// Constants: 1 hour on Miller's Planet = 7 Earth years
const MILLER_RATIO = 7 * 365.25 * 24 * 60 * 60; // seconds in 7 Earth years
const MOVIE_RELEASE_DATE = new Date('2014-11-07T00:00:00Z');

// Function to update Miller's Planet time
function updateMillerTime() {
  const now = new Date();  // Current Earth time
  const earthSecondsElapsed = Math.floor((now - MOVIE_RELEASE_DATE) / 1000); // Total Earth seconds

  // Convert Earth seconds to Miller's Planet seconds
  const millerSecondsElapsed = earthSecondsElapsed / MILLER_RATIO;

  // Break down Miller's time into components
  const years = Math.floor(millerSecondsElapsed / (365.25 * 24 * 60 * 60));
  const remainingSecondsAfterYears = millerSecondsElapsed % (365.25 * 24 * 60 * 60);

  const months = Math.floor(remainingSecondsAfterYears / (30.44 * 24 * 60 * 60));
  const remainingSecondsAfterMonths = remainingSecondsAfterYears % (30.44 * 24 * 60 * 60);

  const days = Math.floor(remainingSecondsAfterMonths / (24 * 60 * 60));
  const remainingSecondsAfterDays = remainingSecondsAfterMonths % (24 * 60 * 60);

  const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));
  const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);

  const minutes = Math.floor(remainingSecondsAfterHours / 60);
  const seconds = Math.floor(remainingSecondsAfterHours % 60);

  // Update the HTML elements with calculated values
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Call the update function every second
setInterval(updateMillerTime, 1000);
