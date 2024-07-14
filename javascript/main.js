$(".hamburger-menu").click(function(){
    $(".hamburger-menu").hide();
    $(".links").show();
    $(".cross").show();
    $(".shadow").show();
  });
  
  $(".cross").click(function(){
    $(".links").hide();
    $(".cross").hide();
    $(".shadow").hide();
    $(".hamburger-menu").show();
  });