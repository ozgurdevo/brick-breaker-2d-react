import React from 'react'
import styled from 'styled-components'

const StartGameButton = styled.button`
  position: absolute;
  background-color: white;
  width: 100px;
  height: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  zIndex: 100;
`
const WelcomeScreen = ({ setStart }) => (
  <StartGameButton onClick={(e) => {
    setStart(true)
    e.stopPropagation()
  }}
  >
    Start Game
  </StartGameButton>
)

export default WelcomeScreen
