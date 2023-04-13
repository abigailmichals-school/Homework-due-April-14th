// You need an API key from Open Weather Map to use their API
// You can sign up for a free one here: https://openweathermap.org/api_keys
const apiKey = "0fba81b62f3b59fabfa7a2f88764787b";

// You need to specify the coordinates of Where you're targeting
// You can use this website to find them: https://www.latlong.net/
const lat = 40.7209;
const lon = -74.0007;

// You need to use the fetch function to make an API call
// You can use this URL to get the current weather data for any location: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// You need to use the .then() method to handle the response from the API
// You need to use the .json() method to parse the response as JSON
fetch(url)
  .then(response => response.json())
  .then(data => {
    // You can access the weather data from the data object
    // You can use this website to see what data is available: https://openweathermap.org/current#current_JSON
    const temp = data.main.temp; // The temperature in Kelvin
    const feelsLike = data.main.feels_like; // The temperature that it feels like in Kelvin

    // You can use console.log() to print the weather data to the console
		console.log("the current temperature in Manhattan is " + temp)
		console.log("the real feel temperature in Manhattan is " + feelsLike)
  })

  .catch(error => {
    // You need to use the .catch() method to handle any errors from the API call
    console.error(error);
  });