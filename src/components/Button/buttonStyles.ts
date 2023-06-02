import styled from 'styled-components'

export const CustomButton = styled.button`
    margin-left: 10px;
    cursor: pointer;
    background-color: rgba(255, 129, 124, 0.59);
    border: 2px solid coral;
    border-radius: 4px;
    border-style: ridge;
    color: rgb(75, 3, 142);
    transition: all 200ms ease-in-out;
    padding: 8px 6px;

    &:hover {
    background-color: bisque;
    color: rgb(255, 0, 212);
    cursor: pointer;
}
`
