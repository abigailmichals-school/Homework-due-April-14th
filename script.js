const apiKey = '0fba81b62f3b59fabfa7a2f88764787b';
const city = 'New York';
const units = 'imperial';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const humidity = data.main.humidity; // Get humidity data
    document.getElementById('temperature').innerHTML = `${temperature} &#8457;`;
    document.getElementById('humidity').innerHTML = `Humidity: ${humidity}%`; // Display humidity data
    const maxTemperature = 110;
    const height = (temperature / maxTemperature) * document.querySelector('.thermometer').clientHeight;
    document.getElementById('mercury').style.height = `${height}px`;

    // Change the color of the thermometer based on the temperature
    if (temperature < 32) {
      document.getElementById('mercury').style.backgroundColor = '#0077be';
    } else if (temperature >= 32 && temperature < 50) {
      document.getElementById('mercury').style.backgroundColor = '#00b3ff';
    } else if (temperature >= 50 && temperature < 70) {
      document.getElementById('mercury').style.backgroundColor = '#ffb300';
    } else {
      document.getElementById('mercury').style.backgroundColor = '#ff0000';
    }
  });

// Get the button element
const button = document.querySelector('.my-button');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Refresh the page
  location.reload();
});
