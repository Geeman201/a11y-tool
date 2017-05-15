import React from 'react';
import styled from 'styled-components';

//  language=SCSS
const A11YInlineMessage = styled.a`
  & {
    z-index: 10000;
    position:absolute;
    left: ${props => coords(props.item.node).left - 5 + 'px'};
    top: ${props => coords(props.item.node).top + 35 + 'px'};
    display: ${props => props.display ? 'block': 'none'};
    background-color: #4A444A;
    color: #F4EB49;
    font-family: Consolas;
    font-size: 12px;
    padding: 10px;
    border: 4px solid #F4EB49;
    border-radius: 7px;
  }
  
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 11px 11px;
    border-color: #4A444A transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -11px;
    left: 9px;
  }
  
  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 14px 14px;
    border-color: #F4EB49 transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -18px;
    left: 6px;
  }
`;

const coords = (node) => (
  {
    top: node.getBoundingClientRect().top + window.pageYOffset,
    left: node.getBoundingClientRect().left + window.pageXOffset
  }
);

const A11YInlineMessages = ({ messages, hash }) => (
  <div>
    {messages.map((message) => (
      <A11YInlineMessage id={message.id} display={hash.indexOf(message.id) >= 0|| hash.indexOf('*') >=0} item={message}>{message.detail.name}</A11YInlineMessage>
    ))}
  </div>
);

export default A11YInlineMessages;
