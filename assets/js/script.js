// Side Bar Show
let aside = document.querySelector("aside");
let menu = document.querySelector("header .search .menu");

menu.addEventListener("click", (e) => {
  aside.classList.toggle("show");
  e.stopPropagation();
});
document.addEventListener("click", () => {
  aside.classList.remove("show");
});

// Successfully Message

let successfullyMessage = document.querySelector("header .btns .added");
let successButton = document.querySelector("header .btns button");

successButton.onclick = function () {
  successfullyMessage.style.display = "flex";
  setTimeout(() => {
    successfullyMessage.style.display = "none";
  }, 1500);
};

// Sort Menu

let sortButt = document.querySelector("main .head button");
let sortMenu = document.querySelector("main .head .sort-menu");

sortButt.addEventListener("click", (e) => {
  if (sortMenu.style.display === "flex") {
    sortMenu.style.display = "none";
  } else {
    sortMenu.style.display = "flex";
  }
  e.stopPropagation();
});
document.addEventListener("click", () => {
  sortMenu.style.display = "none";
});

// Pin Icon

let pinIcon = document.querySelectorAll(".card .card-foot .card-foot-icon > i");

pinIcon.forEach((icon) => {
  icon.onclick = function () {
    icon.classList.toggle("bx-pin");
    icon.classList.toggle("bxs-pin");
  };
});

// Skills Buttons

let skillsButton = document.querySelectorAll(
  ".container .card .card-body .skill span"
);

skillsButton.forEach((skill) => {
  skill.onclick = () => {
    skill.classList.add("active");
  };
});

// Rounded Icon Or Card Icon

let roudedIcon = document.querySelectorAll(".container .card .card-head .icon");
let roudedMenu = document.querySelectorAll(
  ".container .card .card-head .icon .rounded-menu"
);

roudedIcon.forEach((roundIco) =>{
    let menu = roundIco.querySelector(".rounded-menu")

    roundIco.addEventListener("click", (e)=>{
        e.stopPropagation()
        roudedMenu.forEach((menu)=> menu.style.display = 'none')
        menu.style.display = 'block'
    })
})
document.addEventListener("click", ()=>{
    roudedMenu.forEach((menu)=> menu.style.display = 'none')
})