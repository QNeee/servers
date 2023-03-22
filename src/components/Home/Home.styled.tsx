import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: #7289DA;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    font-size: 18px;
    padding: 12px 24px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;