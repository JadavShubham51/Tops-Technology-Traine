

count = setInterval("test()",30)
x=0;

    function test()
    {
        h1 = document.getElementById('h');
        h1.innerHTML = ++x;

        if(x==85){
            clearInterval(count)
        }
    }

    count1 = setInterval("test1()",70)
    y=0;
    
    function test1()
    {
        h2 = document.getElementById('v');
        h2.innerHTML = ++y;

        if(y == 18)
        {
            clearInterval(count1)
        }
    }
    count2 = setInterval("test2()",80)
    z=0;
    
    function test2()
    {
        h2 = document.getElementById('s');
        h2.innerHTML = ++z;

        if(z == 12)
        {
            clearInterval(count2)
        }
    }
    count3 = setInterval("test3()",15)
    w=0;
    
    function test3()
    {
        h2 = document.getElementById('j');
        h2.innerHTML = ++w;

        if(w == 150)
        {
            clearInterval(count3)
        }
    }

    // slider
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 50,
        freeMode: true,
        autoplay:{
            delay:4000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });