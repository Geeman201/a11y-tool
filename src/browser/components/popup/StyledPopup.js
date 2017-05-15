import styled from 'styled-components';

//  language=SCSS
const Popup = styled.div`
  & {
    position: fixed;
    right: 10px;
    top: 10px;
    border-radius: 3px;
    width: 320px;
    height: 400px;
    background-color: #4A444A;
    font-family: Consolas;
    color: #F4EB49;
    z-index: 10000;
    border: 1px solid #444;
  }

  * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.6em;
  }
`;

export default Popup;
