import React from 'react'
import styled from 'styled-components'

import Texture from '../AboutUs/texture.png'
import Image from './Image'
import Text from './Text'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: url(${Texture});
  background-repeat: repeat;
  flex-direction: column;
  align-items: center;
`
export default function Location() {
  return (
    <Wrapper>
      <Text />
      <Image />
    </Wrapper>
  )
}