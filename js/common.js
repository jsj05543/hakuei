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
  $("#main").load("brgd0020.html");
});