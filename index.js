var passSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',"t",'u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','`','~','!','@','#','$','%','&','*','_','-','+','=','<','>','^']
let length = 10;

let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")
let pass3 = document.getElementById("pass-3")
let pass4 = document.getElementById("pass-4")

function generatePass() {
    let randomPass = " "
    for (let i = 0; i < length; i ++) {
        randomPass += passSet [Math.floor (Math.random() * passSet.length)]
    }
    return randomPass
}

function getPass() {
    pass1.textContent = generatePass()
    pass2.textContent = generatePass()
    pass3.textContent = generatePass()
    pass4.textContent = generatePass()
}