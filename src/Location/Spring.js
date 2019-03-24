import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import styled from 'styled-components'


 export const slides = [
  { id: 0, url: 'photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
  { id: 1, url: 'photo-1462850932907-687c915e3d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
  { id: 2, url: 'photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
  { id: 3, url: 'photo-1462850932907-687c915e3d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
]

const MyImg = styled(animated.div)`
  width: 800px;
  height: 430px;
  background-size: cover;
  background-position: center;
  will-change: opacity;
  position: absolute;
  border: 1px solid black;
`

const Images = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 8000), [])
  return transitions.map(({ item, props, key }) => (
    <MyImg
      key={key}
      style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
    />
  ))
}
export default Images