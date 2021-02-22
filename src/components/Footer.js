import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  padding: 10px 100px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  background: #eceff2;
`

function Component() {
  return (
    <Footer>
      <p>本版本由 <a href="https://github.com/BOBOlife" target="_blank">bobolife</a>所有</p>
    </Footer>
  )
}

export default Component
