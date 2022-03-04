const out = function (str) {console.log(str);}
out('we starting to fetch the time here');

const time = document.getElementById("time",1000);
const timezoneContinent = document.getElementById("timezone-continent");
const timezoneCity = document.getElementById("timezone-city");
const utcOffset = document.getElementById("UTC");
const url = "http://worldtimeapi.org/api/timezone/";


const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", () => {
  console.log(dropdown.value);
  worldtimeapiFetch(url + dropdown.value);
});

const worldtimeapiFetch = function (url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      time.textContent = (String(res.datetime)).slice(11, 19);
      timezoneContinent.textContent = "Continent: " + res.timezone.split('/')[0];
      timezoneCity.textContent = "City: " +  res.timezone.split('/')[1].replace('_',' ');
      utcOffset.textContent = "UTC: " + String(res.utc_offset);

    });
};


