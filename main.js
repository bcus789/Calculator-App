const oneBtn = document.getElementById("one-btn")
const twoBtn = document.getElementById("two-btn")
const threeBtn = document.getElementById("three-btn")
const fourBtn = document.getElementById("four-btn")
const fiveBtn = document.getElementById("five-btn")
const sixBtn = document.getElementById("six-btn")
const sevenBtn = document.getElementById("seven-btn")
const eightBtn = document.getElementById("eight-btn")
const nineBtn = document.getElementById("nine-btn")
const zeroBtn = document.getElementById("zero-btn")
const pointBtn = document.getElementById("point-btn")
const acBtn = document.getElementById("ac-btn")
const addBtn = document.getElementById("add-btn")
const subBtn = document.getElementById("sub-btn")
const dvdtn = document.getElementById("dvd-btn")
const mltpBtn = document.getElementById("mltp-btn")

const inptEl = document.getElementById("inpt-el")

inptEl.value = ""

acBtn.addEventListener("click", function(){
    inptEl.value = ""
})

oneBtn.addEventListener("click", function(){
        inptEl.value += oneBtn.value
    }  
)
twoBtn.addEventListener("click", function(){
    inptEl.value += twoBtn.value
}  
)
threeBtn.addEventListener("click", function(){
    inptEl.value += threeBtn.value
}  
)
fourBtn.addEventListener("click", function(){
    inptEl.value += fourBtn.value
}  
)
fiveBtn.addEventListener("click", function(){
    inptEl.value += fiveBtn.value
}  
)
sixBtn.addEventListener("click", function(){
    inptEl.value += sixBtn.value
}  
)
sevenBtn.addEventListener("click", function(){
    inptEl.value += sevenBtn.value
}  
)
eightBtn.addEventListener("click", function(){
    inptEl.value += eightBtn.value
}  
)
nineBtn.addEventListener("click", function(){
    inptEl.value += nineBtn.value
}  
)
zeroBtn.addEventListener("click", function(){
    inptEl.value += zeroBtn.value
}  
)