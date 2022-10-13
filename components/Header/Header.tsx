import React, { useState } from 'react';
import styles from '../../styles/Header.module.css';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';

const HeaderPage = styled.header`
background-color: #e1e1e1;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10%;
`

type HeaderProps = {
  menu?: Array<string>
  pesquisar?: string;
  name?: string;
}

type UserType = {
  email: string;
  password: string;
}
// unindo dois tipos em um só (apenas o type faz isso)
type User = HeaderProps | UserType;
// possui extends 
interface IHeaderProps {
  menu?: Array<string>;
  pesquisar?: string;
  name?: string;
}

export default function Header(props:HeaderProps) {

  const [userAuth, setUserAuth] = useState<boolean>(true);
  const [nameUser, setNameUser] = useState<string | undefined >(props.name);



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


        {/* Conditional Rendering */}
        {userAuth && (<div>
          <span>Seja bem vindo{nameUser?nameUser:" visitante"}</span>
        </div>)}
        <div>
          <form>
          <Input type="text" placeholder="Pesquisar" />
          <Button disabled>{props.pesquisar? props.pesquisar:"Search"}</Button>
          </form>
        </div>
     {/* </header> */}
    </HeaderPage>
  )
}
