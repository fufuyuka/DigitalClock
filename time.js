// 時間の表示
var clock = function(){
  var t = new Date(); 
  // getHoursで時間を取得,先頭に0をつけてslice(-2)で下2桁を返す。つまり常に2桁で表示できる。
  var h = ( "0" + t.getHours()   ).slice( -2 ); 
  // 時間に同じ
  var m = ( "0" + t.getMinutes() ).slice( -2 );
  // 文字列を出力 .innerHTMLをつけてHTML形式で出力
  document.getElementById( "time" ).innerHTML = ( h + "<span>:</span>" + m );
}
// 関数の実行タイミング (関数名, ミリ秒) 1000=1000ミリ秒=1秒
setInterval( clock, 1000 );
