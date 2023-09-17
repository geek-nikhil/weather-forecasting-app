// const apiKey="29936449334b680fd7f990876363abd9"
// const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";
// async function checkWeather(city){
//     const response = await fetch(apiurl + city + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);
//     document.getElementById("city").innerHTML=data.name;
//     document.getElementById("temp").innerHTML=Math.round(data.main.temp) - 273 + "c";
//     document.getElementById("humidity").innerHTML=data.main.humidity + "%";
//     document.getElementById("wind").innerHTML=data.wind.speed + "km/hr";
// }
//     function called(){
//        var sel=document.getElementById("type-bar").value;
//        checkWeather(sel);
//         }
const apiKey="29936449334b680fd7f990876363abd9"
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";  
     function checkWeather(city){
        let promise = fetch(apiurl + city + `&appid=${apiKey}`)
        promise.then((response)=> {
              console.log(response.status)
              console.log(response.ok)
              return response.json()
        })
        .then((data)=>{
            console.log(data)
            document.getElementById("city").innerHTML=data.name;
                document.getElementById("temp").innerHTML=Math.round(data.main.temp) - 273 + "c";
                document.getElementById("humidity").innerHTML=data.main.humidity + "%";
                document.getElementById("wind").innerHTML=data.wind.speed + "km/hr";
        })
    }
    function called(){
               var sel=document.getElementById("type-bar").value;
               checkWeather(sel);
                }