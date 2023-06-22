var timeElement = document.getElementById("time-value");
var currentTime = new Date().toLocaleTimeString(); // Lấy thời gian hiện tại

timeElement.innerHTML = currentTime; // Gán giá trị thời gian hiện tại vào phần tử HTML

var temperature = document.getElementById("weather-value");

//search.value.trim()

async function changeWeatherUI() {
    //temperature-box.time-value.trim()
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.8412&appid=2226c20f90b94d18d5787534061ddc78'
    
    
    let data = await fetch(apiURL).then(res=> res.json())
    console.log(data);
    //temperature.innerText = (data.temperature -273.15 ) 
}
changeWeatherUI()   

//var search = document.getElementById("searchInput"); // Lấy phần tử ô tìm kiếm
//var searchValue = search.value.trim(); // Lấy giá trị đã nhập và loại bỏ khoảng trắng dư thừa
//console.log(searchValue); // In ra giá trị đã nhập sau khi đã được loại bỏ khoảng trắng
