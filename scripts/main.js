


// Goal: popup Loads as soon as the page loads. Make popup disappear upon user click

$(".close").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active-popup");
});

// Goal: Make hamburger menu nav appear and disappear based on user click

$(".my_menu_btn").click(function(){
   $(".my_responsive_menu").toggleClass("expand");
   });



// Goal: Change color of subscribe button to indicate user interactivity. Change text in button to let user know when "subscription" works.
$(".subscribe_button_main").on("mouseover", function(){
  $(this).css("background-color", "#f8bbd0");
});


$(".subscribe_button_main").on("mouseleave", function(){
  $(this).css("background-color", "#fce4ec");
});

$(".subscribe_button_main").on("click", function(){
  $(this).html("Subscribed!");
});
