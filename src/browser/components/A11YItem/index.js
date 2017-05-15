import styled from 'styled-components';

//  language=SCSS
const A11YItem = styled.a`
  & {
    padding: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0,0,0, 0.1);
    text-align: left;
    color: #FFF;
    display:block;
    text-decoration: none;
    border-left: 6px solid;
    border-left-color: ${props => props.item.detail.status === 'ERROR' ? '#d33c59' : '#228ae6'};
    letter-spacing: .5px;
    font-size: 12px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #FFF;
  }
`;

export default A11YItem;
