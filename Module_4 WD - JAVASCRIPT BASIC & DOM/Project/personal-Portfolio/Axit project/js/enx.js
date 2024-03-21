var openNav = document.querySelector(".open-nav");
var closeNav = document.querySelector(".close-nav");
var navBar = document.querySelector(".navBar");

openNav.addEventListener("click",function(){
    navBar.style.opacity = "1";
    navBar.style.visibility = "visible";
    navBar.style.top = "60px";
    openNav.style.display = "none";
    closeNav.style.display = "block";
})
closeNav.addEventListener("click",function(){
    navBar.style.opacity = "0";
    navBar.style.visibility = "hidden";
    navBar.style.top = "40px";
    openNav.style.display = "block";
    closeNav.style.display = "none";
})

// console.log(navBar);