import styled from "styled-components";

export const FileInputStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  border-radius: 5px;
  background-color: #2e3440;
  color: #d8dee9;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #3b4252;
  }

  input {
    display: none;
  }

  span {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: bold;
  }

  svg {
    font-size: 2rem;
  }
`;
