import React, { useEffect, useState } from 'react';
import * as S from './styled';
//esse useHistory permite que vc transite nas pages do site 
import { useHistory } from 'react-router-dom'

export default function Repositories() {
    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);
    //Dentro das chaves eu ponho as variáveis que eu quero observar sua alteração
    //Se eu deixar vazio, a função ocorre assim que a page é redenrizada.
    useEffect(() => {
        
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null){
            //O parse transforma o array novamente em objeto
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName);
            localStorage.clear();
        }
        else {
            //Para que quando o usuário atualizar a pagina não gere um erro pensando na experiência do usário,
            //sempre que o localStorage estiver vazio e ele atualizar a pagina, ela voltará para a página inicial
            history.push('/')

        }


    }, [])
    return (
        <S.container>
            <S.title>Repositórios</S.title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                })  }        
            </S.List>
                <S.LinkHome to = '/'>Voltar</S.LinkHome>
        </S.container>

    )
}