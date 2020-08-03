import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  transition: transform .3s ease;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  width: 60%;
`;

export const Item = styled.div`
  flex-shrink: 0;
  width: 60%;
  margin: 0 20%;
  background-color: #eee;
  border-radius: 4px;
  text-align: center;
`;

