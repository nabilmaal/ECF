/* ---------------NAVBAR-----------------*/

const MENUBURGER = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

MENUBURGER.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

/* ---------------MAIN-----------------*/



/*NAME*/

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div = document.querySelector("#day p")
 div.innerHTML = y.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div1 = document.querySelector("#day1 p")
 div1.innerHTML = y.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div1 = document.querySelector("#day2 p")
 div1.innerHTML = y.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div1 = document.querySelector("#day3 p")
 div1.innerHTML = y.meals[0].strMeal


})


fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
  let div1 = document.querySelector("#day4 p")
  div1.innerHTML = y.meals[0].strMeal
})


fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div1 = document.querySelector("#etp p")
 div1.innerHTML = y.meals[0].strInstructions
})

/*etape*/


fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div1 = document.querySelector("#etp1 p")
 div1.innerHTML = y.meals[0].strInstructions
})


fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div1 = document.querySelector("#etp2 p")
 div1.innerHTML = y.meals[0].strInstructions
})


fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div1 = document.querySelector("#etp3 p")
 div1.innerHTML = y.meals[0].strInstructions
})


fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(x => x.json())
.then (y => {
 let div1 = document.querySelector("#etp4 p")
 div1.innerHTML = y.meals[0].strInstructions
})

/*image*/ 



