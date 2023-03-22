import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    input {
      width: 100%;
      max-width: 300px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
      line-height: 1.5;
      margin-top: 5px;
    }
  }

  button {
    width: 100%;
    max-width: 300px;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #0069d9;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;

    label {
      margin-right: 20px;
      margin-bottom: 0;

      input {
        max-width: 200px;
      }
    }

    button {
      margin-top: 0;
      max-width: 200px;
    }
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 150px;

    label {
      margin-right: 40px;

      input {
        max-width: 300px;
      }
    }

    button {
      max-width: 300px;
    }
  }
`;