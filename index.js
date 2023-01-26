
const inputColor = document.getElementById("color-picker")
const inputScheme = document.getElementById("select-color-types")
const getColorBtn = document.getElementById("get-color-btn")
let seedColor = ""
let seedScheme = ""

// captures the picked color value and removes the hashtag
inputColor.addEventListener("input", () => {
  hexValue = inputColor.value 
  seedColor = hexValue.slice(1)
})

// captures the selected color type
inputScheme.addEventListener("input", ()=> {
  seedScheme = inputScheme.value
})

getColorBtn.addEventListener("click", ()=> {
  fetch (`https://www.thecolorapi.com/id?hex=${seedColor}&mode=${seedScheme}&count`)
    .then(response => response.json())
    .then(data => console.log(data)) 
})










// returning undefined in console
// function getLastColor () {
//   const lastColor = colorArray[1]
//   console.log(lastColor) 
// }

// getLastColor()

