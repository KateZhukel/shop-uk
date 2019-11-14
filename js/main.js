
/*Swiper-slider*/
var swiper = new Swiper('.swiper-container', {
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
    });

    $(".mob-bl__header-check-btn--type").click(function(){
        $(".mob-bl__header-check-btn-img--type").toggleClass("main");
        $(".check-type").toggleClass("check-type--block");
    });



    /*timer*/

// Set the date we're counting down to
    var countDownDate = new Date("Nov 23, 2019 15:37:25").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("hour-js").innerHTML = days + ": " + hours + ": "
            + minutes + ": " + seconds + "";
        document.getElementById("hour-js-bot").innerHTML = days + ": " + hours + ": "
            + minutes + ": " + seconds + "";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("hour-js").innerHTML = "EXPIRED";
        }
    }, 1000);





});




