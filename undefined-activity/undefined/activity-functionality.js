$(document).ready(function(){

    $("#checkDisable").click(function() {
        $("#disableButton").attr("disabled", !this.checked);
      });

$(".alternate").click(function(){
    $(".al").addClass("bg-warning")
    $(".al").addClass("text-dark")
})


$("a[href='#top']").click(function() {
    $(window).scrollTop(0);
    // $("html, body").animate({ scrollTop: 0 }, "slow"); //Also Working
  }); 

  $(".remain").keyup(function(){
    $(".countChar").html(15 - $(this).val().length)
    $(".displayValue").html($(".remain").val())
  })
 
  $(".select").click(function(){
      $("#select").append("<option>"+$(".remain").val()+"</option>")
  })

  $(".remove").click(function(){
    $("#select").empty()
})

$(".day").click(function(){
    $(this).html($(this).html() == 'Good Morning' ? 'Good Evening' : 'Good Morning');
})


$(".number").keypress(function(e){
if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)){
    return false;
  }
   
})


$(".animate").click(function(){
    $(".jquery").animate({width:"70%",opacity:"0.4",fontSize:"3em",marginLeft: "0.6in",borderWidth: "10px"},5000)
})
$(".up").click(function(){
    $("div .move").animate({top:'-=50px'})
})

$(".down").click(function(){
    $("div .move").animate({top:'+=50px'})
})

$(".left").click(function(){
    $("div .move").animate({left:'-=50px'})
})

$(".right").click(function(){
    $("div .move").animate({left:'+=50px'})
})

})