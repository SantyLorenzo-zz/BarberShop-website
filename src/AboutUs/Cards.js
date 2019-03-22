import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import '../Home/Card.css'

const Img = styled.img`
  width: 700px;
  height: 475px;
  margin: 10px;
  border-radius: 10px;
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 170, (x - window.innerWidth / 2) / 170, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export  function Card1() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      className='card'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <ImageContainer>
        <Img alt='img' src='https://images.unsplash.com/photo-1534778356534-d3d45b6df1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' />
      </ImageContainer>
    </animated.div>
  )
}
export function Card2() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      className='card'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <ImageContainer>
        <Img alt='img' src='https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
      </ImageContainer>
    </animated.div>
  )
}