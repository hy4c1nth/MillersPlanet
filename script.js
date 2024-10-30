// Constants for Miller's Planet Time (1 hour on Miller's Planet = 7 Earth years)
const MILLER_HOURS_TO_EARTH_YEARS = 7;
const MOVIE_RELEASE_DATE = new Date('2014-11-07T00:00:00Z');

// Function to calculate how much time has passed on Miller's Planet
function updateMillerTime() {
  const now = new Date();
  const timeDifferenceInMs = now - MOVIE_RELEASE_DATE; // Earth time passed in ms

  // Convert Earth time difference to seconds, then to Miller's planet time
  const earthSeconds = timeDifferenceInMs / 1000; 
  const millerSeconds = earthSeconds / (MILLER_HOURS_TO_EARTH_YEARS * 365.25 * 24 * 60 * 60);

  // Convert Miller's time into years, months, days, hours, minutes, and seconds
  const years = Math.floor(millerSeconds / (365.25 * 24 * 60 * 60));
  const remainingSecondsAfterYears = millerSeconds % (365.25 * 24 * 60 * 60);

  const months = Math.floor(remainingSecondsAfterYears / (30.44 * 24 * 60 * 60));
  const remainingSecondsAfterMonths = remainingSecondsAfterYears % (30.44 * 24 * 60 * 60);

  const days = Math.floor(remainingSecondsAfterMonths / (24 * 60 * 60));
  const remainingSecondsAfterDays = remainingSecondsAfterMonths % (24 * 60 * 60);

  const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));
  const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);

  const minutes = Math.floor(remainingSecondsAfterHours / 60);
  const seconds = Math.floor(remainingSecondsAfterHours % 60);

  // Update the HTML with the calculated time
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update the clock every second
setInterval(updateMillerTime, 1000);
