import getData from "../utils/getData"
import convertTemp from "../utils/convertTemp"
import convertWind from "../utils/convertWind"
import paris from "../assets/images/paris.png"

const url_paris = 'https://api.openweathermap.org/data/2.5/weather?q=paris&appid=c44d035e247374aa73bcaa09c9610cdf'
const url_bquilla = 'https://api.openweathermap.org/data/2.5/weather?q=barranquilla&appid=c44d035e247374aa73bcaa09c9610cdf'

const dataParis = await getData(url_paris)
const tempParis = dataParis.main.temp
const windParis = dataParis.wind.speed

const dataBquilla = await getData(url_bquilla)
const windBquilla = dataBquilla.wind.speed
const tempBquilla = dataBquilla.main.temp

const AddLocation = () => {

  const view = `
    <section class="add-locations">
      <div class="location">
        <div class="location-icon">
          <img src="http://openweathermap.org/img/wn/${dataParis.weather[0].icon}@2x.png" alt="icon">
        </div>
        <div class="locaion-temp">
          <h4>${convertTemp(tempParis)}°c</h4>
        </div>
        <div class="location-name">
          <p class="location-city">${dataParis.name}</p>
          <p class="location-country">${dataParis.sys.country}</p>
        </div>
        <span>Humidity${dataParis.main.humidity}%</span>
        <span>West</span>
        <span>${convertWind(windParis)}km/h</span>
      </div>

      <div class="location">
        <div class="location-icon">
          <img src="http://openweathermap.org/img/wn/${dataBquilla.weather[0].icon}@2x.png" alt="icon">
        </div>
        <div class="locaion-temp">
          <h4>${convertTemp(tempBquilla)}°c</h4>
        </div>
        <div class="location-name">
          <p class="location-city">${dataBquilla.name}</p>
          <p class="location-country">${dataBquilla.sys.country}</p>
        </div>
        <span>Humidity${dataBquilla.main.humidity}%</span>
        <span>West</span>
        <span>${convertWind(windBquilla)}km/h</span>
      </div>


      <div class="add-location">
        <button class="add-location-btn" type="button">Add Location</button>
        <div class="add-location-img">
          <img
            src="${paris}"
            alt="country">
        </div>
      </div>
    </section>
    `
  return view
}

export default AddLocation