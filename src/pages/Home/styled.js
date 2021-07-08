import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
heigth: 100vh;

`
export const content = styled.div`
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    margin: .5rem;
    margin-right: 0;
    //para tirar o negrito do input quando clica nele, é o mesmo que dizer input.focus:
    &:focus,
    &active{
        outline: none;
        box-shadow: none;
    }
`
export const button = styled.button`
    height: 1.6rem;
    border 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0 ;
`

export const ErroMsg = styled.span`
display: block;
font-size: 0.7rem;
color: red;
font-weight: 600;
margin-top: 1rem;
`