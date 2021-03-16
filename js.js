/* RWD nav hamburger toggle jquery*/
$(function(){
    // 點擊按鈕rwdbtn，選單nav-rwd縮放
    $("button.rwdbtn").on("click", function(){
      $("div.nav-rwd").slideToggle();
    });
});


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


/*product-hover換圖 jquery*/
$('#ori').hover(function(){ 
    $('#ori').attr('src', './img/product/ori2.png'); 
}); 

$('#ch').hover(function(){ 
    $('#ch').attr('src', './img/product/ch2.png'); 
});
$('#mb').hover(function(){ 
    $('#mb').attr('src', './img/product/mb2.png'); 
});
$('#bj').hover(function(){ 
    $('#bj').attr('src', './img/product/bj2.png'); 
});
$('#st').hover(function(){ 
    $('#st').attr('src', './img/product/st2.png'); 
});
$('#cs').hover(function(){ 
    $('#cs').attr('src', './img/product/cs2.png'); 
});
$('#mc').hover(function(){ 
    $('#mc').attr('src', './img/product/mc2.png'); 
});
$('#tn').hover(function(){ 
    $('#tn').attr('src', './img/product/tn2.png'); 
});
$('#pp').hover(function(){ 
    $('#pp').attr('src', './img/product/pp2.png'); 
});
$('#rb').hover(function(){ 
    $('#rb').attr('src', './img/product/rb2.png'); 
});

/*product-popup 觸發 jquery*/
$("a.p_btn1").on("click", function(e){
        e.preventDefault();
        $("div.p1").fadeIn();
});
$("a.p_btn2").on("click", function(e){
        e.preventDefault();
        $("div.p2").fadeIn();
});
$("a.p_btn3").on("click", function(e){
        e.preventDefault();
        $("div.p3").fadeIn();
});
$("a.p_btn4").on("click", function(e){
        e.preventDefault();
        $("div.p4").fadeIn();
});
$("a.p_btn5").on("click", function(e){
        e.preventDefault();
        $("div.p5").fadeIn();
});
$("a.p_btn6").on("click", function(e){
        e.preventDefault();
        $("div.p6").fadeIn();
});
$("a.p_btn7").on("click", function(e){
        e.preventDefault();
        $("div.p7").fadeIn();
});
$("a.p_btn8").on("click", function(e){
        e.preventDefault();
        $("div.p8").fadeIn();
});
$("a.p_btn9").on("click", function(e){
        e.preventDefault();
        $("div.p9").fadeIn();
});
$("a.p_btn10").on("click", function(e){
        e.preventDefault();
        $("div.p10").fadeIn();
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

/*contact 表單資料submit驗證*/
let the_form = document.getElementById("the_form");
the_form.addEventListener("submit",function(e){

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let saysomething = document.getElementById("saysomething");

    // 帳號驗證
    let send_data = true;
    if(name.value == ""){
        send_data = false; //未輸入資料 不可送出
    }else{
        //資料正確
    };

    // 信箱驗證 isjs
    if( is.email(email.value) ){
        //資料正確
    }else{
        send_data = false; //資料錯誤 不可送出
    };
    
    // 想說的話驗證
    if(saysomething.value == ""){
        send_data = false; //未輸入資料 不可送出
    }else{
        //資料正確
    };

    alert("我們會盡快以信箱回覆，感謝您的填寫！");
    the_form.reset();

    // !send_data = false
    if(!send_data){
        e.preventDefault();
    }
});