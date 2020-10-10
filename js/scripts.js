//Keep paragraph hidden
$("#caption-1-text").hide();
$("#caption-2-text").hide();
$("#caption-3-text").hide();

//Reveal paragaph on image click
$(".services-design").on("click", function(){
    $(".services-design").toggle();
    $("#caption-1-text").show();
    $("#caption-1").animate({fontweight:"bolder", fontsize: "30px"})
});

$(".dev-icon-design").on("click", function(){
    $(".dev-icon-design").toggle();
    $("#caption-2-text").show();
    $("#caption-2").animate({fontweight:"bolder", fontsize: "30px"})

});

$(".products-icon-design").on("click", function(){
    $(".products-icon-design").toggle();
    $("#caption-3-text").show();
    $("#caption-3").animate({fontweight:"bolder", fontsize: "30px"})

});




//hide paragraph
$("#caption-1-text, #caption-1").on("click", function(){
    $(".services-design").fadeIn();
    $("#caption-1-text").hide(500);
    $("#caption-1").animate({fontweight:"normal", fontsize: "20px"})
    
});

$("#caption-2-text, #caption-2").on("click", function(){
    $(".dev-icon-design").fadeIn();
    $("#caption-2-text").hide(500);
    $("#caption-2").animate({fontweight:"normal", fontsize: "20px"})
    
});

$("#caption-3-text, #caption-3").on("click", function(){
    $(".products-icon-design").fadeIn();
    $("#caption-3-text").hide(500);
    $("#caption-3").animate({fontweight:"normal", fontsize: "20px"})
    
});