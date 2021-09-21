// let XMLHttpRequest = require('xmlhttprequest');

// const API = 'https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=c44d035e247374aa73bcaa09c9610cdf'

// let xhttp = new XMLHttpRequest();

// function getData(url_api, callback) {
//   xhttp.open('GET', url_api, true);
//   xhttp.onreadystatechange = function () {
//     if (xhttp.readyState === 4) {
//       if (xhttp.status === 200) {
//         callback(null, JSON.parse(xhttp.responseText))
//       } else {
//         const error = new Error('Error ' + url_api);
//         return callback(error, null)
//       }
//     }
//   }
//   xhttp.send()
// }

// getData(API, function (error, data) {
//   if (error) return console.error(error);
//   return data
// })



const getData = async (API) => {

  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("fetch error", error);
  }
};

export default getData;