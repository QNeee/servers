import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Server = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;
  padding: 20px;
  text-align: center;
  max-width: 100%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const ServerTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ServerRating = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ServerImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const ServerLikes = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ServerDislikes = styled.p`
  font-size: 16px;
`;