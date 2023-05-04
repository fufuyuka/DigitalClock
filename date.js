// 日付の表示
window.addEventListener("load", ()=>{
  let today = new Date();
  // 0=1月なので、+1する
  let month = today.getMonth() + 1;
  let date = today.getDate();
  // 曜日0~6で取得
  let day = today.getDay();
  // 曜日の0~6に対応させる配列を用意
  let week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  // 文字列を出力 .innerHTMLをつけてHTML形式で出力
  document.getElementById("date").innerHTML = month + "/" + date + " (" + week[day] + ")" ;
});