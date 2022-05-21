import React from 'react'

const Navibar = () => {
  return (
    <div>
      <header>
        <div className="h-menu">
          <input id="h-menu_checkbox" className="h-menuCheckbox" type="checkbox" />
          <label className="h-menu_icon" htmlFor="h-menu_checkbox">
            <span className="hamburger-icon"></span>
          </label>
          <label id="h-menu_black" className="h-menuCheckbox" htmlFor="h-menu_checkbox"></label>
          <div id="h-menu_content">
            <ul>
              <li><a href="/">ホーム</a></li>
              <li><a href="About">概要</a></li>
              <li><a href="Achievement">制作実績</a></li>
              <li><a href="Service">サービス</a></li>
              <li><a href="Contact">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navibar
