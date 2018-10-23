$("button").on("click", function(e){
    $.ajax({url: "http://api.icndb.com/jokes/15", success: function(result){
        $("#demo").html(result.value["joke"]);
    }})
})