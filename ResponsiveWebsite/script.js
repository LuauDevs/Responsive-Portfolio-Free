$(document).ready(function(){
    $(window).scroll(function(){
        // Nav Effect
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){

        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Animated Head Page Text
    var typed = new Typed(".typing", {
        strings: ["by luaudevs!", "for you!", ], // just add an "Text", to add more animated
        typeSpeed: 105,
        backSpeed: 79,
        loop: false
    });

  // Animated About Me Texts
    var typed = new Typed(".typing-2", {
        strings: ["Your text one", "or just keep all empty lol",], // just add an "Text", to add more animated
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Car Effect
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// ByLuaudevs