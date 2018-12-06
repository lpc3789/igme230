/* Don't use <script> tags in a linked js file! */

$(".menuitem").click(function () {
    $(this).next(".submenu").slideToggle(400); //next gets menus to show and hide separately
});

let content = ("content1.txt"); // sets default verse element
$("#choose-content").val(content); // changes menu option to default
$("#content").load(content); // retrieves only default element
$("#choose-content").change(function () {
    content = $(this).val();
    $("#content").load(content);
});
