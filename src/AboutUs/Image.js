import React from 'react'
import styled from 'styled-components'

import Spring from './Spring'

const Wrapper = styled.div`
  width: 900px;
  height: 450px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default function Image() {
  return (
    <Wrapper>
      <Spring />
    </Wrapper>
  )
}