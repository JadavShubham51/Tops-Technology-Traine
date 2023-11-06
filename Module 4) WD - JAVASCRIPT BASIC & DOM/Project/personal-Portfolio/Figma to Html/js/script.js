bar_1 = document.getElementById("bar");
bar_2 = document.getElementById("close");
nav_1 = document.querySelector(".h_list");




setInterval(function () 
{
    if(screen.width >= 900){
        nav_1.style.display="block";
        console.log("shh");
    }
}, 1000);


bar_1.addEventListener("click",function(){
    bar_1.style.display = "none";
    bar_2.style.display = "block";
    nav_1.style.visibility = "visible";
    nav_1.style.opacity = "1";
    nav_1.style.top = "100%";
})
bar_2.addEventListener("click",function(){
    bar_2.style.display = "none";
    bar_1.style.display = "block";
    nav_1.style.visibility = "hidden";
    nav_1.style.opacity = "0";
    nav_1.style.top = "10%";
})