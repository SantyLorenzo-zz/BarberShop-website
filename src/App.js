import React from 'react'
import styled from 'styled-components'

import Card from './InicialPage/Card'
import Header from './InicialPage/Header'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh; 
`
const TitleContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function App() {
  return (
    <Wrapper>
      <Header/>
      <TitleContainer>
        <Card />
      </TitleContainer>
    </Wrapper>
  )
}
 

