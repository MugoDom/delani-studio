$("#design-paragraph").hide();
$(".services-design").on("click", function(){
    $(".services-design").slideUp("slow");
    $("#design-paragraph").show(500);
    $("#fig-design-text").animate({fontweight:"bolder", fontsize: "30px"})
});