import React from 'react'
import audio_jikken from './sound-effect/天空の反逆者.mp3'


// window.onload = function () {
//   var my_audio = new Audio("./sound-effect/天空の反逆者.mp3");
//   //ボタンにクリックイベントを設定
//   document.getElementById("tenmaButton").onclick = function () {
//     // my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
//     my_audio.play();  //サウンドを再生
//   }
// }


const Button_ten = () => {
  // function内で定義すると違うやつがどんどん再生されちゃう。ネタに使えそう
  var my_audio = new Audio(audio_jikken);
  //ボタンにクリックイベントを設定
  function musicOn(e) {
    e.preventDefault();
    my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
    my_audio.play();  //サウンドを再生
  }


  return (
    <div className="button-wrap">
      <br /><br />
      <form onSubmit={musicOn}>
        <button id='tenmaButton'>実験ボタン</button><br />
      </form>

      <p>
        使用させていただいているBGM: 天空の反逆者 作曲者: MoGura様
      </p>
      <a href="https://www.youtube.com/channel/UCyasXLHMATuiSFSVw8REdVw" src="" alt="">
        MoGura様のプラットフォームhttps://www.youtube.com/channel/
        UCyasXLHMATuiSFSVw8REdVw
      </a><br />
    </div>
  )
}


export default Button_ten
