$(function () {
  $(function () {
    // Shift-JISに変更する場合
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
  // $("#main").load("brgd0020.html");
  $( 'input[name="exampleRadios"]:radio' ).change( function() {
    var radioval = $(this).val();
    if(radioval == "1"){
        var color = "rgb(81, 73, 192)";
      $('#color1').css("background-color", color);
      $('#header').css("background-color",color);
        

        console.log("1");
    }
    if(radioval == "2"){
        var color = "rgb(192, 73, 73)";
      $('#color1').css("background-color", color);
      $('#header').css("background-color",color);
    }
    if(radioval == "3"){
        var color = "rgb(101, 192, 73)";
      $('#color1').css("background-color", color);
      $('#header').css("background-color",color);
        
        console.log("3");
    }
});
});