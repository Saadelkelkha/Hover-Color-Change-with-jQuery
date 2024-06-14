$(document).ready(function(){
    $("#hover").mouseenter(function(){
        $(this).css("color","red");
    })
    $("#hover").mouseleave(function(){
        $(this).css("color","black");
    })
})