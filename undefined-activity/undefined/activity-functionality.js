$(document).ready(function(){
    document.onkeydown = function(e) {
        return (event.ctrlKey && event.shiftKey && event.keyCode == 73||event.keyCode == 123||e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117))?false:true 
}
    
    $("#checkDisable").click(function() {
        $("#disableButton").attr("disabled", !this.checked);
      });

$(".alternate").click(function(){
    $(".al").addClass("bg-warning text-dark").removeClass("bg-success")
})


$("a[href='#top']").click(function() {
    $(window).scrollTop(0);
  }); 

  $(".remain").keyup(function(){
    $(".countChar").html(15 - $(this).val().length)
    $(".displayValue").html($(".remain").val())
  })
 
  $(".select").click(function(){
      $("#select").append("<option value='"+$(".remain").val()+"'>"+$(".remain").val()+"</option>")
  })

  $(".remove").click(function(){
    $('#select option[value="'+ $('#select').val() + '"]').remove() 
})

$(".day").click(function(){
    $(this).html($(this).html() == 'Good Morning' ? 'Good Evening' : 'Good Morning');
})


$(".number").keyup(function(){
    $(".number").val($(".number").val().replace(/[^0-9]/g, ''));
    //     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)){
    //        return false; 
    //   } 
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
