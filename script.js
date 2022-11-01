console.log("hello word")
const btn = document.getElementById('btn')
const light = document.getElementById('light')
console.log(light)

function togglebtn(){
    btn.classList.toggle("active")
    light.classList.toggle("on")
}