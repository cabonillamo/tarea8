// function getWeather() {
//   //Get the value of the city from the input
//   var city = "London";
//   //Make a request to the API
//   var request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     "https://api.openweathermap.org/data/2.5/weather?q=Heredia&appid=4583ccbe4a3703b9dd784017f769b7a8"
//   );
//   request.onload = function () {
//     //Begin accessing JSON data here
//     var data = JSON.parse(this.response);
//     if (request.status >= 200 && request.status < 400) {
//       //Print the data on the page
//       document.getElementById("country").innerHTML = data.name;
//       document.getElementById("temp").innerHTML = data.main.temp;
//       //humedad del pais
//       document.getElementById("humidity").innerHTML = data.main.humidity;
//       //viento
//       document.getElementById("wind").innerHTML = data.wind.speed;

//       console.log(data);
//     } else {
//       console.log("error");
//     }
//   };
//   request.send();
// }
// //Call the function
// getWeather();






// var request = new XMLHttpRequest();
// request.open("GET", "https://ipapi.co/json/");
// request.onload = function () {
//     var data = JSON.parse(this.response);
//     if (request.status >= 200 && request.status < 400) {
//         document.getElementById("city").innerHTML = data.city;
//         console.log(data);
//     } else {
//         console.log("error");
//     }
// };
// request.send();




function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    document.getElementById("lat").innerHTML = "Tu latitud es: " + position.coords.latitude;
    document.getElementById("lon").innerHTML = "Tu longitud es: " + position.coords.longitude;

}
getLocation();





function getWeather() {
    var lat = 9.9981413;
    var lon = -84.1908736;




    var request = new XMLHttpRequest();
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=4583ccbe4a3703b9dd784017f769b7a8");
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            // document.getElementById("temp").innerHTML = "La temperatura es: " + data.main.temp;
            document.getElementById("temp").innerHTML = "La temperatura en grados celcius es de" + (data.main.temp - 273.15).toFixed(2) + "°C";
            document.getElementById("country").innerHTML = "El navegador está ubicando sobre " + data.name;
            document.getElementById("humidity").innerHTML = "La humedad actual es de " + data.main.humidity;
            document.getElementById("wind").innerHTML = "La velocidad del viento es de " + data.wind.speed;


            //Ícono relacionado con el estado del tiempo
            var icon = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
            document.getElementById("icon").src = iconurl;

            console.log(data);
        } else {
            console.log("error");
        }
    };
    request.send();
}
getWeather();

