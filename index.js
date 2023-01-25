// captures the picked color
const colorInput = document.getElementById("color-picker")
colorInput.addEventListener("input", () => {
  const seedColor = colorInput.value 
  console.log(seedColor)
})



// fetch ("https://www.thecolorapi.com/")