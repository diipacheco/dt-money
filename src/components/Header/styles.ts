import { styled } from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  background-color: ${({ theme }) => theme["green-500"]};
  padding: 0 1.25rem;
  border: none;
  font-weight: 700;
  color: ${({ theme }) => theme["white"]};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
