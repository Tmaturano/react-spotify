import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  /*CSS3 supports multiple backgrounds. Linear-gradient with directions from up to bottom, in the starting point will start with #414141 (0%) and goes to #181818 when 100%)*/
  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;

  /*100% width and 250px of height for the first background and 100% for the seconds background (transparent)*/
  background-size: 100% 250px, 100%;

  background-repeat: no-repeat;
  background-position: top;
`;
