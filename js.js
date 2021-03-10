/* RWD nav漢堡按鈕 jquery*/
// $(function(){
//     // 點擊按鈕rwdbtn，選單nav-list縮放
//     $("button.rwdbtn").on("click", function(){
//       $("nav.nav-list").slideToggle();
//     });
// });

/* index product-popup 觸發 jquery*/
$("a.the_btn1").on("click", function(e){
    e.preventDefault();
    $("div.star1").fadeIn();
});
$("a.the_btn2").on("click", function(e){
    e.preventDefault();
    $("div.star2").fadeIn();
});
$("a.the_btnh1").on("click", function(e){
    e.preventDefault();
    $("div.hot1").fadeIn();
});
$("a.the_btnh2").on("click", function(e){
    e.preventDefault();
    $("div.hot2").fadeIn();
});
$("a.the_btnh3").on("click", function(e){
    e.preventDefault();
    $("div.hot3").fadeIn();
});
$("a.the_btnh4").on("click", function(e){
    e.preventDefault();
    $("div.hot4").fadeIn();
});
$("a.the_btnh5").on("click", function(e){
    e.preventDefault();
    $("div.hot5").fadeIn();
});


/*shoppingcart-popup 觸發 jquery*/
$("a.cart").on("click", function(e){
    e.preventDefault();
    $("div.shct").fadeIn();
});
  
/*buybtn觸發shoppingcart-popup*/
$("a.buybtn").on("click", function(e){
    e.preventDefault();
    $("div.overlay").fadeOut();
    $("div.shct").fadeIn();
});

/*關閉popup*/
$("a.closebtn").on("click", function(e){
    e.preventDefault();
    $("div.overlay").fadeOut();
});

