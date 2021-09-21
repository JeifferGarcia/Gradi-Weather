import getData from "../utils/getData";
import selectDay from "../utils/selectDay";
import convertTemp from "../utils/convertTemp";

const API = 'https://api.openweathermap.org/data/2.5/forecast?q=bogota&appid=56de5702d240cca4a362ac67d3fbf288'

const data = await getData(API)

let dayOne = data.list[2]
let dayTwo = data.list[8]
let dayThree = data.list[16]


let dateOne = new Date(dayOne.dt_txt).getDay()
let dateTwo = new Date(dayTwo.dt_txt).getDay()
let dateThree = new Date(dayThree.dt_txt).getDay()



const Forecast = () => {
  const view = `
    <section class="forecast">
      <h2 class="title"><strong>3 Days</strong>Forecast</h2>
      <div class="forecast-item">
        <div class="forecast-day">
          <img src="http://openweathermap.org/img/wn/${dayOne.weather[0].icon}@2x.png" alt="today">
          <div>
            <p>${selectDay(dateOne)}</p>
            <p><small>${dayOne.weather[0].main}</small></p>
          </div>
        </div>
        <div class="forecast-temp">
          <span><strong>${convertTemp(dayOne.main.temp_max)}° / ${convertTemp(dayOne.main.temp_min)}°</strong></span>
        </div>
      </div>

       <div class="forecast-item">
        <div class="forecast-day">
          <img src="http://openweathermap.org/img/wn/${dayTwo.weather[0].icon}@2x.png" alt="today">
          <div>
            <p>${selectDay(dateTwo)}</p>
            <p><small>${dayTwo.weather[0].main}</small></p>
          </div>
        </div>
        <div class="forecast-temp">
          <span><strong>${convertTemp(dayTwo.main.temp_max)}° / ${convertTemp(dayTwo.main.temp_min)}°</strong></span>
        </div>
      </div>

       <div class="forecast-item">
        <div class="forecast-day">
          <img src="http://openweathermap.org/img/wn/${dayThree.weather[0].icon}@2x.png" alt="today">
          <div>
            <p>${selectDay(dateThree)}</p>
            <p><small>${dayThree.weather[0].main}</small></p>
            </div>
          
        </div>
        <div class="forecast-temp">
          <span><strong>${convertTemp(dayThree.main.temp_max)}° / ${convertTemp(dayThree.main.temp_min)}°</strong></span>
        </div>
      </div>
    </section>
  `
  return view
}

export default Forecast;