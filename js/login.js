const bt = document.querySelector('.button')
const passInp = document.querySelector('.password');
const div = document.querySelector('.div')

window.onload = () => {
    bt.disabled = true;
}
bt.addEventListener('click', () => {
    div.classList.add('active')
    const timeout = setTimeout(() => {
        location.href = 'https://my.blinkcash.ng/#/auth/register';
        clearTimeout(timeout)
    }, 2000)
})


passInp.addEventListener('input', () => {
    if (passInp.value.length >= 8) {
        passInp.style.borderColor = "#2075bc";
        passInp.style.color = "#2075bc";
        passInp.style.background = "#E8F0FE";
        bt.classList.toggle('active-btn')
        bt.disabled = false
    } else {
        passInp.style.borderColor = "red";
        passInp.style.background = "#F4DBE3"
        bt.classList.remove('active-btn')
        bt.disabled = true
    }
})