$(document).ready(function(){
    $(window).scroll(function(){
            if($(window).scrollTop()>=100){
                $("header").addClass("st");
            }
            else {
                $("header").removeClass("st");
            }
    })
    $("header .navbar .navbar-nav .nav-item .nav-link").click(function(){
        $("header .navbar .navbar-nav .nav-item .nav-link").removeClass("active");
        $(this).addClass("active");
    })
    $(".blog .box .blog-btn").click(function(){
        alert("sorry There are not enough information..thank you");
    })
    $(".contact form .sub-btn").click(function(){
        alert("Your Information is sussessfully Submited...");
    })
})