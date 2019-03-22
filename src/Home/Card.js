import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

import Title from './Title'

const CardComponent = styled(animated.div)`
  width: 35%;
  height: 45%;
  border-radius: 15px;
  transition: box-shadow 0.5s;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 10px 80px 10px rgba(255, 255, 255, 0.2);
  }
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 170, (x - window.innerWidth / 2) / 170, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Card() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <CardComponent
      className='card'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Title/>
    </CardComponent>
  )
}