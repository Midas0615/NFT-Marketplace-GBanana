import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

var Gs = {};

Gs.GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }

`;

Gs.MainBox = styled.div`
  margin: 85px 0 0 0;
`;

Gs.Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1347px;
`;

Gs.Flexdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

Gs.YellowButton = styled.div`
  background: #e5e400;
  border-radius: 3px;
  letter-spacing: 0.05em;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  padding: 13px 0px;
  cursor: pointer;
  text-align: center;
  a {
    color: #000000;
  }
  &:hover {
    a {
      color: #fff;
    }
  }
`;

Gs.MainTitle = styled.div`
   {
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin-top: 0px;
    margin-bottom: 60px;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -14px;
    left: calc(50% - 35px);
    width: 71px;
    height: 1px;
    opacity: 0.2;
    background-color: #000;
  }
`;

export default Gs;
