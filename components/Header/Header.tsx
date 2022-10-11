import React from 'react';
import styles from '../../styles/Header.module.css';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import { width } from '@mui/system';

const HeaderPage = styled.header`
background-color: #e1e1e1;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10%;
`

const InputSearch = styled.input`
border: none;
margin: 0 10px;
padding: 5px;
border-radius: 10px;
color: #000;
background-color: #fff;
outline: none;
box-shadow: 0 0 4px rgba(0,0,0,0.2);
`
const ButtonPage = styled.button`
border: none;
color: yellow;
background-color: #000;
padding: 5px 10px;
border-radius: 10px;`

type HeaderProps = {
  menu?: Array<string>
  pesquisar?: string;
}

export default function Header(props:HeaderProps) {
  return (
    // <header className={styles['menu-site']}> - Utilizando o CSS Module
    <HeaderPage>
        <div>Logotipo</div>
        <nav>
          <ul className={css`
          width: 90%; 
          display: inline-flex; 
          margin: 0px; 
          padding: 0px ;
          > li {
            min-width: 120px;
            text-align: center;
            list-style: none;
          }`}>
            <li>Home</li>
            <li>Produtos</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </nav>
        <div>
          <form>
          <InputSearch type="text" placeholder="Pesquisar" />
          <ButtonPage>{props.pesquisar? props.pesquisar:"Search"}</ButtonPage>
          </form>
        </div>
     {/* </header> */}
    </HeaderPage>
  )
}
