import React from 'react'
import styled from 'styled-components'

import Card from './InicialPage/Card'
import Header from './InicialPage/Header'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function App() {
  return (
    <Wrapper>
      <Header style={{ display: 'flex', flexGrow: '1'}}/>
      <TitleContainer style={{ display: 'flex', flexGrow: '2'}}>
        <Card />
      </TitleContainer>
    </Wrapper>
  )
}
 

