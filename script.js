document.getElementById('calculate').addEventListener('click', function() {
    const earthTime = parseFloat(document.getElementById('earthTime').value);
    const timeDilationFactor = 7; // 1 hour on Miller's Planet = 7 years on Earth

    if (!isNaN(earthTime) && earthTime >= 0) {
        const timeOnMiller = earthTime / timeDilationFactor; // Calculate time on Miller's Planet
        document.getElementById('result').innerText = 
            `Time passed on Miller's Planet: ${timeOnMiller.toFixed(6)} hours`;
    } else {
        document.getElementById('result').innerText = 
            'Please enter a valid number of years.';
    }
});
