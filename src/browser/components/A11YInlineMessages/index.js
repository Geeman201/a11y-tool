import React from 'react';
import styled from 'styled-components';

//  language=SCSS
const A11YInlineMessage = styled.a`
  & {
    z-index: 10000;
    position:absolute;
    left: ${props => coords(props.item.node).left + 'px'};
    top: ${props => coords(props.item.node).top + 25 + 'px'};
    background-color: #4A444A;
    color: #F4EB49;
    font-family: Consolas;
    font-size: 12px;
    padding: 10px;
    border: 4px solid #F4EB49;
  }
`;

const coords = (node) => (
  {
    top: node.getBoundingClientRect().top + window.pageYOffset,
    left: node.getBoundingClientRect().left + window.pageXOffset
  }
);

const A11YInlineMessages = ({ messages }) => (
  <div>
    {messages.map((message) => (
      <A11YInlineMessage id={message.id} item={message}>{message.detail.name}</A11YInlineMessage>
    ))}
  </div>
);

export default A11YInlineMessages;
