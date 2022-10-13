import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

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

export default function Input(props:InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputSearch {...props}/>
  )
}
