
let display=document.getElementById("display")

let add = ()=> {
    let firstvalue = Number(document.getElementById("firstvalue").value)
    let secondvalue = Number(document.getElementById("secondvalue").value)
    let addition = firstvalue+ secondvalue
    display.innerText = addition

}
let sub = ()=> {
    let firstvalue = Number(document.getElementById("firstvalue").value)
    let secondvalue = Number(document.getElementById("secondvalue").value)
    let subraction = firstvalue - secondvalue
    display.innerText = subraction

}
let mul = ()=> {
    let firstvalue=Number(document.getElementById("firstvalue").value)
    let secondvalue=Number(document.getElementById("secondvalue").value)
    let multiply= firstvalue * secondvalue
    display.innerText=multiply

}
let div = ()=> {
    let firstvalue=Number(document.getElementById("firstvalue").value)
    let secondvalue=Number(document.getElementById("secondvalue").value)
    let divition= firstvalue / secondvalue
    display.innerText=divition

}
let mod = ()=> {
    let firstvalue=Number(document.getElementById("firstvalue").value)
    let secondvalue=Number(document.getElementById("secondvalue").value)
    let modulo= firstvalue % secondvalue
    display.innerText=modulo

}
let pow = ()=> {
    let firstvalue=Number(document.getElementById("firstvalue").value)
    let secondvalue=Number(document.getElementById("secondvalue").value)
    let power=  Math.pow(firstvalue,secondvalue) 
    display.innerText=power

}

