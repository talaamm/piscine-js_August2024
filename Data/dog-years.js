function dogYears(planet , dogsec){
let age = dogsec / 31557600
age = (age * 7)
return Math.round((age /planets[planet]) *100)/100 

}
const planets = {
    earth: 1 , 
    mercury : 0.2408467 , 
    venus: 0.61519726 ,
    mars : 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus:  84.016846 ,
    neptune:164.79132,
}