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
const dvdBtn = document.getElementById("dvd-btn")
const mltpBtn = document.getElementById("mltp-btn")
const inptEl = document.getElementById("inpt-el")
const equalBtn = document.getElementById("equalsbtn")
let calculation = ""

inptEl.value = ""

acBtn.addEventListener("click", function(){
    inptEl.value = ""
    calculation = ""
})

oneBtn.addEventListener("click", function(){
        inptEl.value += oneBtn.value
        calculation += 1
    }  
)
twoBtn.addEventListener("click", function(){
    inptEl.value += twoBtn.value
    calculation += 2
}  
)
threeBtn.addEventListener("click", function(){
    inptEl.value += threeBtn.value
    calculation += 3
}  
)
fourBtn.addEventListener("click", function(){
    inptEl.value += fourBtn.value
    calculation += 4
}  
)
fiveBtn.addEventListener("click", function(){
    inptEl.value += fiveBtn.value
    calculation += 5
}  
)
sixBtn.addEventListener("click", function(){
    inptEl.value += sixBtn.value
    calculation += 6
}  
)
sevenBtn.addEventListener("click", function(){
    inptEl.value += sevenBtn.value
    calculation += 7
}  
)
eightBtn.addEventListener("click", function(){
    inptEl.value += eightBtn.value
    calculation += 8
}  
)
nineBtn.addEventListener("click", function(){
    inptEl.value += nineBtn.value
    calculation += 9
}  
)
zeroBtn.addEventListener("click", function(){
    inptEl.value += zeroBtn.value
    calculation += 0
}  
)
pointBtn.addEventListener("click", function(){
    inptEl.value += pointBtn.value
    calculation += "."
}  
)
addBtn.addEventListener("click", function(){
    inptEl.value += addBtn.value
    calculation += "+"
}  
)
subBtn.addEventListener("click", function(){
    inptEl.value += subBtn.value
    calculation += "-"
}  
)
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
