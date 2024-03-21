// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer','Web-Designer','Back-End Developer','Full-stack Web-developer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,
})


// Active Link State On Scroll


// Get all Links

let navLinks = document.querySelectorAll('nav ul li a');
// console.log(navLinks)

// Get All Sections
let sections = document.querySelectorAll('section');
// console.log(sections)

window.addEventListener('scroll',function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') == link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});

 aboutn = document.querySelector('.about');
 skilln = document.querySelector('.skill');
 resumen = document.querySelector('.resume');
 Portfolion = document.querySelector('.Portfolio');
 contactn = document.querySelector('.contact');


    function scroll()
    {
        if(document.documentElement.scrollTop > 400)
        {
            aboutn.style.left = "0%";
            aboutn.style.opacity = "1";
        }
        if(document.documentElement.scrollTop > 1000)
        {
            skilln.style.left = "0%";
            skilln.style.opacity = "1";
        }
        if(document.documentElement.scrollTop > 1400)
        {
            resumen.style.left = "0%";
            resumen.style.opacity = "1";
        }

        if(document.documentElement.scrollTop > 2400)
        {
            Portfolion.style.left = "0%";
            Portfolion.style.opacity = "1";
        }
        if(document.documentElement.scrollTop > 3400)
        {
            contactn.style.top = "0%";
            contactn.style.opacity = "1";
        }
    }

    small = document.querySelector("#small")
    adnavce = document.querySelector("#advance")
    tab = document.querySelector(".tab")
    tab1 = document.querySelector(".tab1")


    small.addEventListener("click",()=>{
        tab.style.display="grid";
        // tab.style.background="blue"
        small.style.background="lightcoral";
        adnavce.style.background="#00A78E";
        tab1.style.display="none";
    })
    adnavce.addEventListener("click",()=>{
        tab1.style.display="grid";
        tab.style.display="none";
        small.style.background="#00A78E"
        adnavce.style.background="lightcoral"
    })