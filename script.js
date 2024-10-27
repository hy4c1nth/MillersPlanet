// Set the time dilation factor
const timeDilationFactor = 7 * 3600; // 1 hour on Miller's Planet = 7 years on Earth in seconds

// Get the starting time when the webpage loads
const startTime = new Date().getTime();

function updateMillerTime() {
    // Get the current time
    const currentTime = new Date().getTime();
    
    // Calculate the elapsed time in seconds
    const elapsedTimeInSeconds = (currentTime - startTime) / 1000; // Convert milliseconds to seconds

    // Calculate time on Miller's Planet
    const millerTimeInSeconds = elapsedTimeInSeconds / timeDilationFactor;

    // Convert to hours, minutes, and seconds
    const hours = Math.floor(millerTimeInSeconds % 24);
    const minutes = Math.floor((millerTimeInSeconds % 1) * 60);
    const seconds = Math.floor((millerTimeInSeconds % (1 / 60)) * 60);

    // Update the result in the HTML
    document.getElementById('result').innerText = 
        `Time passed on Miller's Planet: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

// Call the updateMillerTime function every second
setInterval(updateMillerTime, 1000);
