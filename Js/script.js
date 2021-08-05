$(document).ready(function () {
     //.......
     $(".menus li a").click(function (e) {
       let target = $(this).attr("href");
       $("html.body").animate({
            scrollTop:$(target).offset().top-60,
       },6000);
     });
});