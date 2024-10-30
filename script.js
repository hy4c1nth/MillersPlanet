const MILLER_TO_EARTH_RATIO = 7 * 365.25 * 24 * 60 * 60; 


function updateMillersTime() {
  const earthTimeElapsed = Date.now() / 1000; 
  const millerTimeElapsed = earthTimeElapsed / MILLER_TO_EARTH_RATIO; 

 
  const hours = Math.floor(millerTimeElapsed / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((millerTimeElapsed % 3600) / 60).toString().padStart(2, '0');
  const seconds = Math.floor(millerTimeElapsed % 60).toString().padStart(2, '0');

 
  document.getElementById('millers-time').textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateMillersTime, 1000);
