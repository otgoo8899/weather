// api -> hussen zuiliinha ugugdliig uguud tusgai beldsen data-g holboh
// fetch(link/url)-> api iig holboh func
// .then() ->promise
// status => 200 approved
// 500,300,404
// .json() => zambaagui datag boginsgoh
// [0]-> massive/arrey 

fetch('https://fakestoreapi.com/products').then(
	response => response.json()
).then(
	data => {
	console.log(data[data.length-1].rating.count);
	}
);
fetch('https://fakestoreapi.com/users').then(
	response => response.json()
).then(
	data1 => {
	console.log(data1[0].name.firstname)
	}
);
let search = document.getElementsByTagName('input')[0]
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let temp = document.querySelector('.temp');
let btn = document.getElementsByTagName('button')[0]
let img = document.getElementsByTagName('img')[0]
btn.addEventListener('click',()=>{
	let city = search.value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	data => {
		name.innerText=data.name;
		temp.innerText=data.main.temp;
		wind.innerText=data.wind.speed;
		desc.innerText=data.weather[0].description
		if(data.weather[0].main=="Rain"){
			img.src="https://cdn-icons-png.flaticon.com/512/2204/2204338.png";
		}else if(data.weather[0].main=='Snow'){
			img.src="https://cdn-icons-png.flaticon.com/512/6363/6363166.png";
		}else if(data.weather[0].main=="Clouds"){
			img.src='https://cdn-icons-png.flaticon.com/512/8691/8691186.png'
		}
					
	}
);
});