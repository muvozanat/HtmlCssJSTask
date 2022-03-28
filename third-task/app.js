const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector("#menu")
const closeIcon = document.querySelectorAll(".line")
const links = document.querySelectorAll("#menu li")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("open")
    closeIcon.forEach(item => item.classList.toggle("x"))
})

links.forEach(item =>(
    item.addEventListener("click", ()=>{
        menu.classList.remove("open")
        closeIcon.forEach(item => item.classList.toggle("x"))
    })
))