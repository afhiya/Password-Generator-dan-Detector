const password = document.getElementById("password")
const passwordLength = document.getElementById("passwordLength")
const [low, upp, num, sym] = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
]
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeric = "1234567890"
const symbols = "!@#$%^&*()"
const data = lowercase + uppercase + numeric + symbols

function handlerGenerator() {

    let generate = ""
    if (passwordLength.value !== "") {
        for (i = 0; i < passwordLength.value; i++) {
            generate += data[Math.floor(Math.random() * data.length)]
        }
        password.disabled = true
    } else {
        alert("harap isi panjang password")
        password.disabled = false
    }
    password.value = generate
}

function handlerDetector() {
    let lower = ""
    let upper = ""
    let number = ""
    let symbol = ""
    if (password.value !== "") {
        for (let i = 0; i < password.value.length; i++) {
            if (lowercase.includes(password.value[i])) {
                lower += password.value[i]
            } else if (uppercase.includes(password.value[i])) {
                upper += password.value[i]
            } else if (numeric.includes(password.value[i])) {
                number += password.value[i]
            } else if (symbols.includes(password.value[i])) {
                symbol += password.value[i]
            }
        }
    } else {
        alert("Harap Isi")
    }
    low.classList.remove("red", "green")
    upp.classList.remove("red", "green")
    num.classList.remove("red", "green")
    sym.classList.remove("red", "green")

    // Add class based on condition
    if (lower.length < 3) {
        low.classList.add("red")
    } else {
        low.classList.add("green")
    }

    if (upper.length < 3) {
        upp.classList.add("red")
    } else {
        upp.classList.add("green")
    }

    if (number.length < 3) {
        num.classList.add("red")
    } else {
        num.classList.add("green")
    }

    if (symbol.length < 3) {
        sym.classList.add("red")
    } else {
        sym.classList.add("green")
    }
}

function handlerReset (){
    password.value = ""
    passwordLength.value = ""
    password.disabled = false
    passwordLength.disabled = false
    low.classList.remove("red", "green")
    upp.classList.remove("red", "green")
    num.classList.remove("red", "green")
    sym.classList.remove("red", "green")
}