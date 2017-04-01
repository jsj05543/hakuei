//*****************************************************************************
/*function OpenSmallWindow(url){
    window.open(url,'_blank','width=700,height=500,resizable=yes,menubar=no,toolbar=no,scrollbars=yes');
}*/

function OpenSmallWindow(url,windowname,width,height) {
 var features="location=no, menubar=no,center=no status=no, scrollbars=no, resizable=no, toolbar=no";
 if (width) {
  if (window.screen.width > width)
   features+=", left="+(window.screen.width-width)/2;
  else width=window.screen.width;
  features+=", width="+width;
 }
 if (height) {
  if (window.screen.height > height)
   features+=", top="+(window.screen.height-height)/2;
  else height=window.screen.height;
  features+=", height="+height;
 }
 window.open(url,windowname,features);
}

function disp(){

	// 「OK」時の処理開始 ＋ 確認ダイアログの表示
	if(window.confirm('本当に削除しますか？')){

		location.href = "../brgd005_user.html"; // example_confirm.html へジャンプ

	}
	// 「OK」時の処理終了

	// 「キャンセル」時の処理開始
	else{

		window.alert('キャンセルされました'); // 警告ダイアログを表示

	}
	// 「キャンセル」時の処理終了

}