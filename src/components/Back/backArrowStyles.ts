import styled from 'styled-components'

export const BackButton = styled.button`
    margin-top: 25px;
    margin-left: 10px;
    cursor: pointer;
    background-color: rgba(255, 129, 124, 0.59);
    border: 2px solid coral;
    border-style: ridge;
    color: rgb(75, 3, 142);
    transition: all 200ms ease-in-out;
    padding: 8px 6px;
    width: 50px;
     height: 50px;
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
    

    &:hover {
    background-color: bisque;
    color: rgb(255, 0, 212);
    cursor: pointer;
}
`