const fetch = require('node-fetch');

let api_key = 'e845dfea671332a1e942ea5fec4ab12a';
let city = 'london';
let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
fetch( api_url )
.then((response) => response.json())
.then((data) => console.log( 'The temperature in ' + data.name + ' is ' + data.main.temp + ' Celcius' ))
.catch((err) => console.log(err));