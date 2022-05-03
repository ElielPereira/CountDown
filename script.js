let elements = document.querySelectorAll(".timer div:nth-child(odd) p:last-child")

let timer = new Date(2022, 05, 05)




const count = () => {
    let today = new Date()
    let falta = new Date(timer.getTime() - today.getTime())
    elements[0].textContent = falta.getDate()
    elements[1].innerHTML = falta.getHours()
    elements[2].innerHTML = falta.getMinutes()
    let seconds = falta.getSeconds() < 10 ? '0' + falta.getSeconds() : falta.getSeconds()
    elements[3].innerHTML = seconds
}

setInterval(count, 500)