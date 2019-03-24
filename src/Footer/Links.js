import React from 'react'
import styled from 'styled-components'

import { Title } from '../AboutUs/Description'
import { Item } from '../Home/Header'

const Wrapper = styled.div`
  margin: 30px 0;
  width: 600px;
  height: 250px;
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
  color: #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
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
        <Item href='#Home'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          HOME
        </Item>
      </LinkContainer>
      <LinkContainer>
        <Item href='#About'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          ABOUT
        </Item>
      </LinkContainer>
      <LinkContainer>
        <Item href='#work'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          WORK
        </Item>
      </LinkContainer>
      <LinkContainer>
        <Item href='#Location'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          LOCATION
        </Item>
      </LinkContainer>
      <LinkContainer>
        <Item href='http://localhost:3000/'>
          <i style={{ marginRight: '5px', color: '#e0a240' }} class="fas fa-chevron-right" />
          CONTACT
        </Item>
      </LinkContainer>
    </Wrapper>
  )
}