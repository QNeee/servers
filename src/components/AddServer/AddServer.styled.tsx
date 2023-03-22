import styled from 'styled-components';

export const Form = styled.form`
    padding:15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    width: 70%;
  }

  @media only screen and (min-width: 1280px) {
    width: 50%;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 500;
  font-size: 18px;
  color: #222;
`;

export const Input = styled.input`
  padding: 14px 18px;
  border-radius: 10px;
  border: none;
  margin-top: 5px;
  font-size: 16px;
  width: 90%;
  background-color: #F7F7F7;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #0077FF;
  }

  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  background-color: #0077FF;
  color: #FFFFFF;
  border-radius: 10px;
  border: none;
  padding: 14px 30px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0050FF;
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
