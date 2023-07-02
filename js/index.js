const bt = document.querySelector('.button')
const input = document.querySelector('input');

window.onload = () => {
    bt.disabled = true
}
bt.addEventListener('click', () => {
    if (input.value == "") {
        input.style.borderColor = "red";
        input.style.background = "#F4DBE3"
    } else {
        location.href = './login.html'
        localStorage.setItem('number', input.value)
    }
})

input.addEventListener('input', () => {
    if (input.value.length != 10) {
        input.style.borderColor = "red";
        input.style.background = "#F4DBE3"
        bt.classList.remove('active')
        bt.disabled = true
    } else if (!input.value.includes("070")) {
        input.style.borderColor = "red";
        input.style.background = "#F4DBE3"
        bt.classList.remove('active')
        bt.disabled = true
    } 
    else {
        input.style.borderColor = "#2075bc";
        input.style.color = "#2075bc";
        input.style.background = "#E8F0FE";
        bt.classList.toggle('active')
        bt.disabled = false
        return
    }
    if (input.value.length != 10) {
        input.style.borderColor = "red";
        input.style.background = "#F4DBE3"
        bt.classList.remove('active')
        bt.disabled = true
    } else if (!input.value.includes("080")) {
        input.style.borderColor = "red";
        input.style.background = "#F4DBE3"
        bt.classList.remove('active')
        bt.disabled = true
    } else {
        input.style.borderColor = "#2075bc";
        input.style.color = "#2075bc";
        input.style.background = "#E8F0FE";
        bt.classList.toggle('active')
        bt.disabled = false
        return
    }
    if (input.value.length != 10) {
        input.style.borderColor = "red";
        input.style.background = "#F4DBE3"
        bt.classList.remove('active')
        bt.disabled = true
    } else if (!input.value.includes("090")) {
        input.style.borderColor = "red";
        input.style.background = "#F4DBE3"
        bt.classList.remove('active')
        bt.disabled = true
    } else {
        input.style.borderColor = "#2075bc";
        input.style.color = "#2075bc";
        input.style.background = "#E8F0FE";
        bt.classList.toggle('active')
        bt.disabled = false
        return
    }
})