function convertTemperature() {
  // Kelvin value
  const kelvin = 293;

  // Convert to Celsius
  const celsius = kelvin - 273;

  // Convert to Fahrenheit
  let fahrenheit = celsius * (9 / 5) + 32;
  fahrenheit = Math.floor(fahrenheit);

  // Convert to Newton scale
  let newton = celsius * (33 / 100);
  newton = Math.floor(newton);

  // Show results in HTML
  document.getElementById("celsius").innerText =
    `Celsius: ${celsius} °C`;

  document.getElementById("fahrenheit").innerText =
    `Fahrenheit: ${fahrenheit} °F`;

  document.getElementById("newton").innerText =
    `Newton: ${newton} N`;
}