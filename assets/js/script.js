let aside = document.querySelector("aside")
let menu = document.querySelector("header .search .menu")

menu.addEventListener("click", (e) => {
    aside.classList.toggle("show")
    e.stopPropagation()
})
document.addEventListener("click", () => {
    aside.classList.remove("show")

})