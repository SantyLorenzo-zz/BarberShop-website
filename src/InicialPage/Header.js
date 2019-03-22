import React from 'react'
import styled from 'styled-components'

import logo from './logo.png'

const Wrapper = styled.header`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;  
  height: 100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,1);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,1);
`

const Logo = styled.div`
  align-items: center;
  margin-left: 30px;
  display: flex;
  height: 100px;
  width: 120px;
`
const Menu = styled.ul`
  justify-content: space-between;
  list-style-type: none;
  flex-direction: row;
  display: flex;
  width: 900px;
`
const ItemContainer= styled.li``

const Icon = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Item = styled.a`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  font-size: 13px;
  color: #d6d6d6;

  ${ItemContainer}:hover & {
    color: #FD80B1;
  }

  ${Icon}:& {
    background: #FD80B1;
  }
`

const IconsContainer = styled.div`
  height: 100px;
  width: 120px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center
  justify-content: space-between;
`

export default function Header() {
  return(
    <Wrapper>
      <Logo>
        <a href='http://localhost:3000/'>
          <img src={logo} alt='logo'/>
        </a>
      </Logo>
      <div>
        <Menu>
          <ItemContainer>
            <Item href='http://localhost:3000/'>HOME</Item>
          </ItemContainer>
          <ItemContainer>
            <Item href='http://localhost:3000/'>PAGES</Item>
          </ItemContainer>
          <ItemContainer>
            <Item href='http://localhost:3000/'>PORTFOLIO</Item>
          </ItemContainer>
          <ItemContainer>
            <Item href='http://localhost:3000/'>SINGLE PORTFLIO</Item>
          </ItemContainer>
          <ItemContainer>
            <Item href='http://localhost:3000/'>HEADERS</Item>
          </ItemContainer>
          <ItemContainer>
            <Item href='http://localhost:3000/'>JOURNAL</Item>
          </ItemContainer>
          <ItemContainer>
            <Item href='http://localhost:3000/'>SHOP</Item>
          </ItemContainer>
          <ItemContainer>
            <Item href='http://localhost:3000/'>SHORTCODES</Item>
          </ItemContainer>
        </Menu>
      </div>
      <IconsContainer>
        <Icon>
          <Item href='http://localhost:3000/'><i class="fab fa-instagram fa-2x"></i></Item>
        </Icon>
        <Icon>
          <Item href='http://localhost:3000/'><i class="fab fa-github fa-2x"></i></Item>
        </Icon>
        <Icon>
          <Item href='http://localhost:3000/'><i class="fab fa-facebook fa-2x"></i></Item>
        </Icon>
      </IconsContainer>
    </Wrapper>
  )
}