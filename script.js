// Constants for Miller's Planet Time (1 hour on Miller's Planet = 7 years on Earth)
const EARTH_TO_MILLER_RATIO = 7 * 365.25 * 24; // hours to Earth years conversion
const MOVIE_RELEASE_DATE = new Date('2014-11-07T00:00:00Z');

// Function to calculate time difference and convert to Miller's planet time
function updateMillerTime() {
  const now = new Date();
  const timeDifferenceInMs = now - MOVIE_RELEASE_DATE;
  const timeDifferenceInHours = timeDifferenceInMs / (1000 * 60 * 60); 

  // Miller's planet equivalent hours
  const millerHours = timeDifferenceInHours / EARTH_TO_MILLER_RATIO;

  // Convert hours to years, months, days, etc.
  const years = Math.floor(millerHours / (24 * 365.25));
  const months = Math.floor((millerHours % (24 * 365.25)) / (24 * 30.44));
  const days = Math.floor((millerHours % (24 * 30.44)) / 24);
  const hours = Math.floor(millerHours % 24);
  const minutes = Math.floor((millerHours * 60) % 60);
  const seconds = Math.floor((millerHours * 3600) % 60);

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
