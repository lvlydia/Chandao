$(()=>{
    //----- Pop FadeInUp Animate -----//

    var pop = new WOW(
        {
            boxClass: 'fadeInUp',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                $(box).css({"animation-play-state": "running"})
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );

    pop.init();

    $(".btns").click(function () {
            $(".arrow").attr("src","../img/arrow-orange.png");
            $(".btns").css("color","#FF9900");
            $(".btns").css("border","2px solid #FF9900");
            $(".btns").css("background","none");
            $(".btns").css("cursor","pointer");
    });

    $(".look-more").click(function () {
        $(".arrow").attr("src","../img/arrow-orange.png");
        $(".look-more").css("color","#FF9900");
        $(".look-more").css("border","2px solid #FF9900");
        $(".look-more").css("background","none");
        $(".look-more").css("cursor","pointer");
    });



})
