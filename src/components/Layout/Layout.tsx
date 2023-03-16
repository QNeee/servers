import React from "react";
import { Outlet } from "react-router-dom";
import { LinkItem } from "../App.styled";
import { Logo, LogoContainer,MenuLi, MenuButton, MenuContainer, MenuIcon, MenuList } from "./Layout.styled";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  getModal, setModal,  } from "../../Redux/serversSlice";

export const Layout: React.FC = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    // const [modal, setModal] = useState<boolean>(false);
    // const modal = useSelector(getModal);
    const modal = useSelector(getModal);
    console.log(modal);
    const onClickMenu = (): void => {
        !modal ? dispatch(setModal(true)) : dispatch(setModal(false));
    }
    const onClickLink = ():void => {
        if (modal) {
         dispatch(setModal(false))
        }
    }
    return <div>
        <LogoContainer><Logo onClick={onClickLink} to={'/'}>Liza</Logo>
          <MenuButton onClick={onClickMenu}>
    <MenuIcon viewBox="0 0 24 24">
                    {!modal&&<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />}
                {modal&&<path d="M18.2929 5.29289C18.6834 4.90237 19.3166 4.90237 19.7071 5.29289C20.0976 5.68342 20.0976 6.31658 19.7071 6.70711L13.4142 13L19.7071 19.2929C20.0976 19.6834 20.0976 20.3166 19.7071 20.7071C19.3166 21.0976 18.6834 21.0976 18.2929 20.7071L12 14.4142L5.70711 20.7071C5.31658 21.0976 4.68342 21.0976 4.29289 20.7071C3.90237 20.3166 3.90237 19.6834 4.29289 19.2929L10.5858 13L4.29289 6.70711C3.90237 6.31658 3.90237 5.68342 4.29289 5.29289C4.68342 4.90237 5.31658 4.90237 5.70711 5.29289L12 11.5858L18.2929 5.29289Z"/>}
    </MenuIcon>
  </MenuButton>
        </LogoContainer>
        <Outlet/>
        {modal&&  <MenuContainer style={{ transform: modal ? 'translateX(0)' : 'translateX(-100%)' }}>
        <MenuList>
          <MenuLi>
            <LinkItem onClick={onClickLink} to="/login">Login</LinkItem>
          </MenuLi>
          <MenuLi>
            <LinkItem onClick={onClickLink} to="/register">Register</LinkItem>
          </MenuLi>
          <MenuLi>
            <LinkItem onClick={onClickLink} to="/support">Support</LinkItem>
          </MenuLi>
        </MenuList>
      </MenuContainer>}
    </div>
}