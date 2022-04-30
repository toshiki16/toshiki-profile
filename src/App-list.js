import React from 'react'
import snakeImage from './app-photo/snake.png'
import markdownImage from './app-photo/markdown.png'

const App_list = () => {
  return (
    <div>
      <div><h2><li>製作したもの</li></h2></div>
      <div className="app-wrap">
        <a href="https://toshiki16.github.io/hooks-snake-game/">
          <h3>スネークゲーム</h3>
          <img src={snakeImage} alt="snakegame" className="Snake-Game" />
        </a>
      </div>
      <div className="app-ing-wrap">
        <a href="https://toshiki16.github.io/markdown-editor">
          <h3>PC用の需要があるかわからないメモ帳アプリ(記憶保存)</h3>
          <img src={markdownImage} alt="PC用の需要があるかわからないメモ帳アプリ（記憶保存）" className="Markdown-Editor" />
        </a>
      </div>
    </div>

  )
}

export default App_list
