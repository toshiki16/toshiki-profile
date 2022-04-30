import React from 'react'

const Button_ten = () => {
  return (
    <div className="button-wrap">
      <br /><br />
      <input type="button" id="tenmaButton" value="BGM実験ボタン" /><br />
      <p>
        使用させていただいているBGM: 天空の反逆者 作曲者: MoGura様
      </p>
      <a href="https://www.youtube.com/channel/UCyasXLHMATuiSFSVw8REdVw" src="" alt="">
        MoGura様のプラットフォームhttps://www.youtube.com/channel/UCyasXLHMATuiSFSVw8REdVw
      </a><br />
      {/* {
        window.onload = function () {
          var my_audio = new Audio("./sound-effect/天空の反逆者.mp3");
          //ボタンにクリックイベントを設定
          document.getElementById("tenmaButton").onclick = function () {
            my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
            my_audio.play();  //サウンドを再生
          }
        }
      } */}
    </div>
  )
}


export default Button_ten
