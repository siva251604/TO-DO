$(document).ready( function(){

    $("#btn").click(function(){
        var nee=$("#input").val();
        if(nee){
            $("#unor").append("<li><span class='opn'>"+nee+" </span><span class='edit'>edit</span> <span class='remove'>remove</span</li>")
            $("#input").val('')
        }
    })

    $("#input").focus(function(){
        $(this).addClass("highlight")
    })

    $("#input").blur(function(){
        $(this).removeClass("highlight")
    })

    $("#unor").on("click",".opn",function(){
        $(this).toggleClass("comple")
    })

    $("#unor").on("click",".remove",function(){
        $(this).parent().remove()
    })

    $("#unor").on("click",".edit",function(){
       var $too= $(this).siblings(".input")
       var cur=$too.text()
       var goo=prompt("edit task",cur)
       if(goo){
       $too.text(goo)
       }
    })






   

})


