import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import styled from 'styled-components'


const slides = [
  { id: 0, url: 'photo-1532710093739-9470acff878f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
  { id: 1, url: 'photo-1546665291-dbef6ab58991?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
  { id: 2, url: 'photo-1549271568-e87e07c5406b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
  { id: 3, url: 'photo-1520345376710-1662a32db252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
]

const MyImg = styled(animated.div)`
  width: 800px;
  height: 450px;
  background-size: cover;
  background-position: center;
  will-change: opacity;
  position: absolute;
`

const Images = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 3000), [])
  return transitions.map(({ item, props, key }) => (
    <MyImg
      key={key}
      style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
    />
  ))
}
export default Images