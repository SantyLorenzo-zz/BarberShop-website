import React from 'react'
import styled from 'styled-components'

import Card from './Card'
import Header from './Header'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
`
const TitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`
export default function Home() {
  return (
    <Wrapper>
      <Header/>
      <TitleContainer>
        <Card />
      </TitleContainer>
    </Wrapper>
  )
}
 