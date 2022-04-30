import React from 'react'
import Python_cpu from './app-photo/Python-cpu.png'

const Mymind = () => {
  return (
    <div class="Mymind-wrap">
      <h2><li>気になるやつ</li></h2>
      <a
        href="https://camo.githubusercontent.com/7eba6ff826871a5f1b9fb48d5dc7472dbf6bdbcda80bfb975bdde5a0ff71fdf5/68747470733a2f2f6f746f726f2e6e65742f696d672f736c696d6567796d2f706978656c2e676966">
        <h3>Python言語で機械学習したCPU同士のバトル.（他者製作）</h3>
        <img src={Python_cpu} alt="" class="Python-cpu" />
      </a>
    </div>
  )
}

export default Mymind
