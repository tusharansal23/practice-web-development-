$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=orlando&APPID=7d7514fefe1fae4771937a44c060e92b",
function(data){
	console.log(data);
	var temp=Math.floor(data.main.temp);
	$(".temp").append(temp);
	var weather=data.weather[0].main;
	$(".weather").append(weather);
	
	var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
	$(".icon").attr('src',icon);
});