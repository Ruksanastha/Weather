const weatherApi = () => {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?lat=27.70169&lon=85.3206&appid=d761c19285955c0b66c0f97916f1bf68";
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((store) => {
      document.getElementsByClassName("temp")[0].innerText = store.main.temp;
      document.getElementsByClassName("humidity")[0].innerText =
        store.main.humidity;
      document.getElementsByClassName("country_name")[0].innerText = store.name;

      document.getElementsByClassName("des")[0].innerText =
        store.weather[0].description;
      document.getElementsByClassName("speed")[0].innerText = store.wind.speed;
    });
};
window.open(weatherApi());
