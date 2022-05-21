import React from 'react'

const Header = () => {
  function btnAction() {
    alert('ボタンアクション確認-成功');
  }
  return (
    <div>
      <div id='first-v'>
        <div className="first-v-wrap">
          <h2 className="first-v-title">
            Welcome to this server
          </h2>
          <button className="first-v-btn">
            <form onClick={btnAction}>
              <i className="fas fa-door-open">実験ボタン</i>
            </form>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
