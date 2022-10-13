import { getFormLabelUtilityClasses } from '@mui/material';
import { NextPageContext } from 'next';
import React, { useEffect, useState } from 'react';
import { Context } from 'vm';

type ConceitosProps = {
    frase?: string;
    autor?: string;
}

  async function getFrase(){
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    
    return {
      frase, autor
    }
  }


export default function Conceitos(props:ConceitosProps) {
    const [frase, setFrase] = useState<string | undefined>(props.frase);
    const [autor, setAutor] = useState<string | undefined>(props.autor);
    let contador = 0;

    useEffect(() => {
      getFrase().then((data) => { console.log(`Executou ${contador} vez`, data);});
      contador++;
    }, [contador, frase, autor]);


  return (
    <>
      <h1>{frase?frase: " Seja muito bem vindo!!"}</h1>
      {autor && <h2>{autor}</h2>}

      <button onClick={(e)=>setAutor("Milena")}>Mudar autor</button>
      <button onClick={(e)=>setFrase("Frase qualquer")}>Mudar autor</button>
    </>
  )
}

// GetInitialProps - setar o valor dos estados no carregamento da página

Conceitos.getInitialProps = async (ctx: NextPageContext) => {

  const res = await fetch('https://type.fit/api/quotes');
  const data = await res.json();
  const position = Math.floor(Math.random() * data.length);
  const frase = data[position].text;
  const autor = data[position].author;

  return {
    frase,
    autor
  }
}