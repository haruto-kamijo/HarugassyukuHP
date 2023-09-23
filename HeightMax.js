// JavaScript Document
$(function() {
    $('.example').outerHeight($(window).height());
});
$(window).on('resize',function(){
    let winH = $(window).height();
    $(".example").outerHeight(winH);
});