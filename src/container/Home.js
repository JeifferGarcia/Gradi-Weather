import getData from "../utils/getData";
import convertTemp from "../utils/convertTemp";
import Forecast from "../components/Forecast"
import Visit from "../components/Visit"
import AddLocation from "../components/AddLocation"
import bogota from "../assets/images/bogota.svg"
import iconLocation from "../assets/images/location-icon.png"
const API = 'https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=c44d035e247374aa73bcaa09c9610cdf'

const data = await getData(API)
const tempK = data.main.temp
const forecast = document.querySelector(".forecast")
const visit = document.querySelector(".visit")
const add_locations = document.querySelector(".add-locations")

let dl = data.weather[0].icon

const Home = () => {
  const view = `

  <div class="main-banner banner-bg ${dl.charAt(2) === "d" ? "day" : "nigth"}">
  <div class="banner-title">
    <h1><span class="icon-location"></span> ${data.name}</h1>
  </div>
    <figure class="container-map">
      <img src="${bogota}" alt="map-bogota">
    </figure>
  </div>
    <div class="temp-conatiner">
      <div class="temp-icon">
        <div>
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="today">
        </div>
        <div>
          <p><small>${data.weather[0].main}</small></p>
        </div>
      </div>
      <div class="temp">${convertTemp(tempK)}<span>°c</spam></div>
    </div>
    ${forecast.innerHTML = Forecast()}
    ${visit.innerHTML = Visit()}
    ${add_locations.innerHTML = AddLocation()}

  `;
  return view;
};

export default Home;