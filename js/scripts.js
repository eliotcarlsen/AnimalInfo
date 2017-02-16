$(function(){
  $("form").submit(function(){
    event.preventDefault();
    var tiger = $("input:radio[name=animal]:checked").val();
    var cougar = $("input:radio[name=animal]:checked").val();
    var panda = $("input:radio[name=animal]:checked").val();

    if("tiger" === tiger ){
      $(".tiger").show();
      $(".panda").hide();
      $(".cougar").hide();
    } else if("cougar" === cougar){
      $(".cougar").show();
      $(".tiger").hide();
      $(".panda").hide();
    } else {
      $(".panda").show();
      $(".cougar").hide();
      $(".tiger").hide();
    };
  });
});
