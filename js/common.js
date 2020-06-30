$(function () {
  // Shift-JISに変更する場合
  $(function () {
    $.ajaxSetup({
      beforeSend: function (xhr) {
        xhr.overrideMimeType("text/html;charset=Shift_JIS");
      }
    });
  });
  $("#header").load("sub/header.html");
  $("#sidebarMenu").load("sub/menu.html");
  $('<input type="checkbox" id="openSidebarMenu" class="openSidebarMenu">').insertAfter('#header');
  $('<label for="openSidebarMenu" class="sidebarIconToggle"><div class="spinner diagonal part-1"></div><div class="spinner horizontal"></div><div class="spinner diagonal part-2"></div></label>').insertBefore('#sidebarMenu');
});

//デザイン設計関数
function  setTheme(i){
  var color1 = "rgb(73, 144, 192);";
  var color2 = "rgb(192, 73, 73)";
  var color3 = "rgb(101, 192, 73)";
  if(i == 1){
      $("#header").css("background-color", "");
      $("#sidebarMenu").css("background-color", "");
      $("#header").css("background-color", color1);
      $("#sidebarMenu").css("background-color", color1);
      $(".contents-header").addClass("contents-header-theme1");
      $(".contents-header").removeClass("contents-header-theme2");
      $(".contents-header").removeClass("contents-header-theme3");
      console.log(i);
  }
  if(i == 2){
      $("#header").css("background-color", color2);
      $("#sidebarMenu").css("background-color", color2);
      $(".contents-header").addClass("contents-header-theme2");
      $(".contents-header").removeClass("contents-header-theme1");
      $(".contents-header").removeClass("contents-header-theme3");
  }
  if(i == 3){
      $("#header").css("background-color", color3);
      $("#sidebarMenu").css("background-color", color3);
      $(".contents-header").addClass("contents-header-theme3");
      $(".contents-header").removeClass("contents-header-theme1");
      $(".contents-header").removeClass("contents-header-theme2");
  }
}
//デザイン設計関数
function  setLogoImage(j){
  if(j == 1){
      $("#logoIamge").src = "img/logo.jpg";
      
      console.log(j+"====");
  }
  if(j == 2){
    $("#logoIamge").src = "img/logo2.jpg";
    $("#header").load("sub/header.html","#logoIamge").src = "img/logo.jpg";
    console.log(j+"====");
  }
  if(j == 3){
    $("#logoIamge").src = "img/logo3.jpg";
    console.log(j+"====");
  }
}