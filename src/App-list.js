import React from 'react'
import Slider from 'react-slick'
import snakeImage from './app-photo/snake.png'
import markdownImage from './app-photo/markdown.png'

const App_list = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <div>
      <h2 className='daimei'><li>製作したもの</li></h2>
      <Slider {...settings}>
        <div className="app-wrap">
          <div className='applist-Image'>
            <a href="https://toshiki16.github.io/hooks-snake-game/" className='appImage'>
              <h3>スネークゲーム</h3>
              <img src={snakeImage} alt="snakegame" className="Snake-Game" />
            </a>
          </div>
        </div>
        <div className="app-ing-wrap">
          <a href="https://toshiki16.github.io/markdown-editor">
            <h3>PC用の需要があるかわからないメモ帳アプリ(記憶保存)</h3>
            <img src={markdownImage} alt="PC用の需要があるかわからないメモ帳アプリ（記憶保存）" className="Markdown-Editor" />
          </a>
        </div>
      </Slider>
    </div>

  )
}

export default App_list
