$(".menu").click(function () {
    $(this).next(".items").slideToggle(400); //next gets menus to show and hide separately
});

//**I wasn't able to get the article to change but this is the code I had that I was not able to work**

//let article = ("article0.txt"); // sets default
//$("#article-choose").val(article); // changes menu option to default
//$("#content").load(article); // retrieves only default element
//$("#article-choose").change(function () {
//    article = $(this).val();
//    $("#content").load(article);
//});
//
//let article = ("article0.txt") // sets default
//var selValue = $('input[name=article]:checked').val();
//$(selValue).val(article); // changes menu option to default
//$(selValue).load(article);
//
$(document).ready(function () {
        let article = $("input[name=article]:checked").val();
        if (article) {
//            $("input[name=article]").load(article);
            article = $("input[name=article]:checked").val();
        } else {
            article = ("article0.txt")
        }
});

//let article = ("article0.txt") // sets default
//$("input[name=article]:checked").change(function () {
//    article = $(this).val();
//    $("input[name=article]:checked").load(article);
//});
