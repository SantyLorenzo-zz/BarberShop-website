import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;  
  height: 100px;
  width: 100%;
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
  font-size: 12px;
  color: #222222;

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
          <img src='https://21g6p436jemo16mo9n1a25yq-wpengine.netdna-ssl.com/v1/wp-content/uploads/sites/36/2015/05/oshine-logo-black.png' alt='logo' />
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