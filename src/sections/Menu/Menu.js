import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Container, MenuBox, List, Item, CloseButton, Background } from './Menu.styles'

export const Menu = () => {

    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [animate, setAnimate] = React.useState(false);

    const menuReducer = useSelector((state) => state.menuReducer);  

    const closeMenu = () => {
        dispatch({
          type: "SET_MENU_OPEN",            
          open : false
        });
      }

    React.useEffect(()=>{
        setOpen(menuReducer.open);
        setTimeout(() => {
            setAnimate(menuReducer.open);    
        }, 100);
    }, [menuReducer]);

    return(
        <Container open={open} onClick={closeMenu}>
            <Background animate={animate} />
            <MenuBox animate={animate} onClick={e => e.stopPropagation()}>
                <List>
                    <Item  href="./">HOME</Item>
                    <Item href="./">SERVIÇOS</Item>
                    <Item href="./">PRODUTOS</Item>
                    <Item href="./">QUEM SOMOS</Item>
                    <Item href="./">CONTACTOS</Item>
                    <Item href="./">ORÇAMENTO GRATUITO</Item>
                </List>
                <CloseButton onClick={closeMenu}/>
            </MenuBox>
        </Container>
    );
}

export default Menu;