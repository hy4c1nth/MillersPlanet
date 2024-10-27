let earthTimeInSeconds = 0; // Track time in seconds on Earth
const timeDilationFactor = 7 * 3600; // 1 hour on Miller's Planet = 7 years on Earth in seconds

function updateMillerTime() {
    earthTimeInSeconds++; // Increment Earth time by 1 second

    // Calculate time on Miller's Planet
    const millerTimeInSeconds = earthTimeInSeconds / timeDilationFactor;

    // Convert to years, hours, minutes, and seconds
    const years = Math.floor(millerTimeInSeconds / (365 * 24 * 3600));
    const hours = Math.floor((millerTimeInSeconds % (365 * 24 * 3600)) / 3600);
    const minutes = Math.floor((millerTimeInSeconds % 3600) / 60);
    const seconds = Math.floor(millerTimeInSeconds % 60);

    // Update the result in the HTML
    document.getElementById('result').innerText = 
        `Time passed on Miller's Planet: ${years} years, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

// Call the updateMillerTime function every second
setInterval(updateMillerTime, 1000);
