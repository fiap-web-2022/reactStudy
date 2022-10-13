import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { type } from 'os';


const ButtonPage: React.FC<ButtonUnion> = styled.button`
border: none;
color: yellow;
background-color: #000;
padding: 5px 10px;
border-radius: 10px;`

type ButtonProps = {
    children: React.ReactNode;
}

type ButtonUnion = ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props:ButtonUnion) {
  return (
    <ButtonPage {...props}>{props.children}</ButtonPage>
  )
}

// props.children pega tudo que está entre as tags do componente
