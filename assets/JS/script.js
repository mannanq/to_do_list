//check off todos by clicking i.e. strikethrough

$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});


//clicking on X deletes the to-do

$("ul").on("click", "span", function(e){
    e.stopPropagation(); //stops the event propagation up the chain
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

$("input[type='text']").on("keypress", function(e){
    if(e.which == 13){
      var todoItem =  $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoItem + "</li>");
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});