import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Link)`
text-decoration: none;
z-index: 111;
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
color:yellow;
  width: 180px;
  @media (min-width: 768px) {
    font-family: 'Helvetica', sans-serif;
    font-size: 3rem;
  }
  
  @media (min-width: 1280px) {
    font-family: 'Georgia', serif;
    font-size: 4rem;
  }
`;
export const LogoContainer = styled.div`
padding-top:20px;
padding-bottom:20px;
background-color: blue;
display: flex;
justify-content: center;
align-items: center;
 @media (min-width: 768px) {
    padding-left:20px;
    padding-right: 20px;
    justify-content: space-between;
 }
`;
export const MenuButton = styled.button`
z-index: 111;
  display: block;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media (min-width: 320px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
   @media (min-width: 1280px) {
  display: none;
  }
`;

export const MenuIcon = styled.svg`
  fill: currentColor;
  width: 100%;
  height: 100%;
`;
export const MenuLi = styled.li`
  margin-top:30px;
  @media (min-width: 768px) {
  }
`;
export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  margin-top:80px;
  box-sizing: border-box;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
display: flex;
justify-content: center;
align-items: center;
  @media (min-width: 768px) {
    position: static;
    width: auto;
    height: auto;
    z-index: auto;
    padding: 0;
    transform: none;
    transition: none;
  }
 @media (min-width: 1280px) {
   display: none;
  }
`;
export const MenuItem = styled.a`

  display: block;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    display: inline-block;
    padding: 0 15px;
    border: none;
  }
`;

// Стилі для списку меню
export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;