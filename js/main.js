/*Swiper-slider 2*/
var mySwiper = new Swiper('.mob-bl__tab-swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.mob-bl__tab-swiper-btn-next.swiper-button-next',
        prevEl: '.mob-bl__tab-swiper-btn-prev.swiper-button-prev',
    },
});


/*Tabs*/
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("mob-bl__tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("mob-bl__tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*Clickable check*/
$(document).ready(function(){

    $(".mob-bl__header-check-btn--category").click(function(){
        $(".mob-bl__header-check-btn-img--category").toggleClass("main");
        $(".check-category").toggleClass("check-category--block");
        $(".check-type").removeClass("check-type--block");
        $(".mob-bl__header-check-btn-img--type").removeClass("main");
        $("#Hot").toggleClass('none');
    });

    $(".mob-bl__header-check-btn--type").click(function(){
        $(".mob-bl__header-check-btn-img--type").toggleClass("main");
        $(".check-type").toggleClass("check-type--block");
        $(".check-category").removeClass("check-category--block");
        $(".mob-bl__header-check-btn-img--category").removeClass("main");
    });



/*timer*/

    function makeTimer() {

        //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
        var endTime = new Date("29 Dec 2019 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span class='points'>:</span>" + "<span>дни</span>");
        $("#hours").html(hours + "<span class='points'>:</span>" + "<span>часы</span>");
        $("#minutes").html(minutes + "<span class='points'>:</span>"  + "<span>мин</span>");
        $("#seconds").html(seconds  + "<span>сек</span>");


        $("#days-two").html(days + "<span class='points'>:</span>" + "<span>дни</span>");
        $("#hours-two").html(hours + "<span class='points'>:</span>" + "<span>часы</span>");
        $("#minutes-two").html(minutes + "<span class='points'>:</span>"  + "<span>мин</span>");
        $("#seconds-two").html(seconds  + "<span>сек</span>");


        $("#days-stock").html(days + "<span class='points'>:</span>" + "<span>дни</span>");
        $("#hours-stock").html(hours + "<span class='points'>:</span>" + "<span>часы</span>");
        $("#minutes-stock").html(minutes + "<span class='points'>:</span>"  + "<span>мин</span>");
        $("#seconds-stock").html(seconds  + "<span>сек</span>");

        $("#days-new").html(days + "<span class='points'>:</span>" + "<span>дни</span>");
        $("#hours-new").html(hours + "<span class='points'>:</span>" + "<span>часы</span>");
        $("#minutes-new").html(minutes + "<span class='points'>:</span>"  + "<span>мин</span>");
        $("#seconds-new").html(seconds  + "<span>сек</span>");

        $("#days-new2").html(days + "<span class='points'>:</span>" + "<span>дни</span>");
        $("#hours-new2").html(hours + "<span class='points'>:</span>" + "<span>часы</span>");
        $("#minutes-new2").html(minutes + "<span class='points'>:</span>"  + "<span>мин</span>");
        $("#seconds-new2").html(seconds  + "<span>сек</span>");

    }

    setInterval(function() { makeTimer(); }, 1000);

});






