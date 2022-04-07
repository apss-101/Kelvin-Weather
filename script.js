const kelvin = 293; //this represents the forcast weather in kelvin
const celsius = kelvin - 273; //temperature in celsius
const fahrenheit = Math.floor(celsius * (9/5) + 32); //temperature in fahrenheit. answer can be in decimal so Math.floor is used to turn it integer

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)

