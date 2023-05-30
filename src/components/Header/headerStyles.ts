import styled from "styled-components";

export const Container = styled.header`
  background: rgba(17, 17, 17, 0.7);
  color: #fff;
  height: 90px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinea los botones a la derecha */
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-right: 40px;
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 8px 6px;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
`;
