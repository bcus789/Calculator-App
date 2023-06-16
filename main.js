const inptEl = document.getElementById("inpt-el")
const acBtn = document.getElementById("ac-btn")
const dvdBtn = document.getElementById("dvd-btn")
const mltpBtn = document.getElementById("mltp-btn")
const equalBtn = document.getElementById("equalsbtn")
const buttons = document.getElementsByClassName("btn")

let calculation = ""

inptEl.value = ""

acBtn.addEventListener("click", function(){
    inptEl.value = ""
    calculation = ""
})

Array.from(buttons).forEach(button => button.addEventListener("click", inputHandler))

function inputHandler(event){
    const bInput = event.target.value;
    console.log(bInput)
    inptEl.value += bInput
    calculation += bInput
}
dvdBtn.addEventListener("click", function(){
    inptEl.value += dvdBtn.value
    calculation += "/"
}  
)
mltpBtn.addEventListener("click", function(){
    inptEl.value += mltpBtn.value
    calculation += "*"
}  
)

equalBtn.addEventListener("click", function(){
    let result = eval(calculation)
    inptEl.value = result
})
