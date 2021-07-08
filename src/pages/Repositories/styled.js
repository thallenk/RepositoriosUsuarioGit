import styled from 'styled-components'
// esse link faz com que você redenrize a página sem dar refreash
import { Link } from 'react-router-dom'

export const container = styled.div`
    width:100%;
    max-width: 990px;
    margin: 0 auto;

`
export const title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;    
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
    margin: .5rem;

`
export const ListItem = styled.li `
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;

`
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: 0.5rem 0;
    color: white;
    text-decoration: none;
`