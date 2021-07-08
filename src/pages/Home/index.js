import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
//esse useHistory permite que vc transite nas pages do site 
import { useHistory } from 'react-router-dom'

// Essa função abaixo retorna um JSX (representação de um código html dentro do js)
// Vamos criar um código que tenha um input e um botão e o usuário ira inserir seu login do github para que 
// possamos encontrá-lo através de um API

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState ('');
  const [ erro, setErro ] = useState(false)
  function handlePesquisa (){
    //utilizando o axios para fazer requizição no API do github
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map(repository => repositoriesName.push(repository.name)
      // console.log(JSON.stringify(repositoriesName))
      );
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      //Logo quando eu inserir o usuario no input, o site redireciona para o repositories
      history.push('/repositories')
      setErro(false)
    })
    .catch(err =>{
      setErro(true)
    });
    
  }
  return (
    <S.HomeContainer>
      <S.content>
      <S.Input className = "usuarioInput" placeholder = "Usuário" value = {usuario} onChange = {e => setUsuario(e.target.value)}/>
      <S.button type="button" onClick = {handlePesquisa}>Pesquisar</S.button>
      </S.content>
      { erro  ? <S.ErroMsg>Ocorreu um erro. Tente novamente!</S.ErroMsg> : ''}
    </S.HomeContainer>

  );
}

export default App;
