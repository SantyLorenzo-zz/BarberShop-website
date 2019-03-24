import React from 'react'
import styled from 'styled-components'

import { Title } from '../AboutUs/Description'
import { Item } from '../Home/Header'

const Wrapper = styled.div`
  margin: 30px 0;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const MyTitle = styled(Title)`
  width: 150px;
  height: 34px;
  font-size: 25px;
  text-align: center;
  color: black;
  border-bottom: 1px solid black;
`
const LinkContainer = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
`

export default function Links() {
  return (
    <Wrapper>
      <MyTitle>LINKS</MyTitle>
      <LinkContainer>
        <Item style={{ color: 'black' }} href='#Home'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          HOME
        </Item>
      </LinkContainer>
      <LinkContainer>
        <Item style={{ color: 'black' }} href='#About'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          ABOUT
        </Item>
      </LinkContainer>
      <LinkContainer>
        <Item style={{ color: 'black' }} href='#work'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          WORK
        </Item>
      </LinkContainer>
      <LinkContainer>
        <Item style={{ color: 'black' }} href='#Location'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          LOCATION
        </Item>
      </LinkContainer>
      <LinkContainer>
        <Item style={{ color: 'black' }} href='http://localhost:3000/'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          CONTACT
        </Item>
      </LinkContainer>
    </Wrapper>
  )
}