//Keep paragraph hidden
$("#caption-1-text").hide();
$("#caption-1-text").hide();
$("#caption-1-text").hide();

//Reveal paragaph on image click
$(".services-design").on("click", function(){
    $(".services-design").fadeOut("slow");
    $("#caption-1-text").show(500);
    $("#fig-design-text").animate({fontweight:"bolder", fontsize: "30px"})
});

//hide paragraph
$("#caption-1-text", "#fig-design-text").on("click", function(){
    $(".services-design").fadeIn();
    $("#caption-1-text").hide(500);
    $("#fig-design-text").animate({fontweight:"bolder", fontsize: "30px"})

});