window.onload = function () {
  var my_audio = new Audio("./sound-effect/天空の反逆者.mp3");
  //ボタンにクリックイベントを設定
  document.getElementById("tenmaButton").onclick = function () {
    my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
    my_audio.play();  //サウンドを再生
  }
}




