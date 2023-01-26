
const inputColor = document.getElementById("color-picker")
const inputScheme = document.getElementById("select-color-types")
const getColorBtn = document.getElementById("get-color-btn")
let seedColor = ""
let seedScheme = ""
let colorsArray = []
let hexArray = []

// captures the picked color value and removes the hashtag
inputColor.addEventListener("input", () => {
  hexValue = inputColor.value 
  seedColor = hexValue.slice(1)
})

// captures the selected color type
inputScheme.addEventListener("input", ()=> {
  seedScheme = inputScheme.value.toLowerCase()
})

getColorBtn.addEventListener("click", ()=> {
  fetch (`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${seedScheme}`)
    .then(response => response.json())
    .then(data =>  {
      colorsArray = data.colors 
      getHex()
      // renderHex()
    }    
 )      
})

function getHex () { 
  hexArray = colorsArray.map(color => color.hex.value)
  renderHex()
}

function renderHex(){
  hexArray.forEach(function(hex){
    document.getElementById("hex-container").innerHTML += `
    <p class="hex-id">${hex}</p>`
    document.getElementById("color-container").innerHTML += `
    <div class="color-swatch">Hi</div>`
    document.getElementById("color-container").style.backgroundColor = `${hex}`
  })
}












// returning undefined in console
// function getLastColor () {
//   const lastColor = colorArray[1]
//   console.log(lastColor) 
// }

// getLastColor()

