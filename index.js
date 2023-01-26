
const inputColor = document.getElementById("color-picker")
const inputScheme = document.getElementById("select-color-types")
const getColorBtn = document.getElementById("get-color-btn")

const colorContainer = document.getElementById("color-container")
const hexContainer = document.getElementById("hex-container")

let seedColor = ""
let seedScheme = ""
let colorsArray = []
let hexArray = []

function startScreen(){
  hexArray.push("#FD72A1", "#4CD4B0", "#5DECBB", "#FBBF71", "#FAFC76", "#C0FD7A")
  inputColor.value = "#FD72A1"
  
 
  render()
}

startScreen() 

function getData() {
  fetch (`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${seedScheme}`)
  .then(response => response.json())
  .then(data =>  {
    colorsArray = data.colors 
    getHex()
  }) 
}

function getHex() { 
  removeLastRender()
  hexArray = colorsArray.map(color => color.hex.value)
  hexArray.unshift(`#${seedColor.toUpperCase()}`)
  render()
}


// captures the picked color value and removes the hashtag
inputColor.addEventListener("input", () => {
  const hexValue = inputColor.value
  seedColor = hexValue.slice(1)
})

// captures the selected color type
inputScheme.addEventListener("input", () => {
  seedScheme = inputScheme.value.toLowerCase()
})

getColorBtn.addEventListener("click", getData)

function getHex() { 
  removeLastRender()
  hexArray = colorsArray.map(color => color.hex.value)
  hexArray.unshift(`#${seedColor.toUpperCase()}`)
  render()
}

function render() {
  hexArray.forEach(function(hex){
    colorContainer.innerHTML += `
    <div class="color-swatch" id="${hex.slice(1)}"></div>`
    hexContainer.innerHTML += `
    <p class="hex-id">${hex}</p>`
    document.getElementById(`${hex.slice(1)}`).style.backgroundColor = `${hex}`
  })
}

function removeLastRender() {
  hexArray.length = 0
  colorContainer.innerHTML = ""
  hexContainer.innerHTML = ""
}















// returning undefined in console
// function getLastColor () {
//   const lastColor = colorArray[1]
//   console.log(lastColor) 
// }

// getLastColor()

