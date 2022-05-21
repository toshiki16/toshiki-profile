import React from 'react'
import Patissier from './app-photo/patissier-perchoir.jpg'
import LineImage from './app-photo/Line.png'



const Favorite = () => {
  return (
    <div className="favorite-wrap">
      <br /><br />
      <h2 className='daimei'><li>宣伝～！！</li></h2>
      <p>
        宮代町の無印良品店内にて、毎週月曜日に展開されているpatissier perchoir店<br />
        *東武動物公園駅より徒歩1分*
      </p><br />
      <a href="https://perchoir.shop-pro.jp/?force=pc">HP: patissier perchoir(パティスリーペルショワール)<br />
        <img src={Patissier} alt="" />
      </a><br />
      <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=565klqkm">公式ライン<br />
        <img src={LineImage} alt="" className="favorite-Line" />
      </a><br />
      <p>
        ※紹介許可はいただきました。
      </p>
    </div>
  )
}

export default Favorite
