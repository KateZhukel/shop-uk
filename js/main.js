
/*Swiper-slider*/
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
    console.log('test');
}

/*Clickable check*/
$(document).ready(function(){
    $(".mob-bl__header-check-btn--category").click(function(){
        $(".mob-bl__header-check-btn-img--category").toggleClass("main");

    });

    $(".mob-bl__header-check-btn--type").click(function(){
        $(".mob-bl__header-check-btn-img--type").toggleClass("main");
    });


    $(".mob-bl__header-check-btn--category").click(function(){
        $(".check-category").toggleClass("check-category--block");

    });
    $(".mob-bl__header-check-btn--type").click(function(){
        $(".check-type").toggleClass("check-type--block");
        console.log('test');
    });

});



