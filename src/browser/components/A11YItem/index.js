import React, { Component } from 'react';
import styled from 'styled-components';

//  language=SCSS
const A11YItemWrapper = styled.a`
  & {
    padding: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0,0,0, 0.1);
    text-align: left;
    color: #FFF;
    display:block;
    text-decoration: none;
    border-left: 6px solid ${props => colourBorder(props.item.type)};
    letter-spacing: .5px;
    font-size: 12px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #FFF;
  }
`;

const colourBorder = (status) => {
  switch (status) {
    case "ERROR":
      return '#D33C59';
    case "WARNING":
      return '#D3CF52';
    case "INFO":
      return '#228AE6';
    default:
      return 'rgba(0,0,0,1)'
  }
}

//  language=SCSS
const A11YTitle = styled.div`
  & {
    font-size: 12px;
  }
`;

//  language=SCSS
const A11YDetail = styled.div`
  &{
    display: ${props => props.display ? 'block' : 'none'};
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    margin-left: 10px;
  }
`;

class A11YItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    //  Component should only update when expanding
    return this.state.expanded !== nextState.expanded;
  }

  toggle() {
    this.setState((prevState) => {
      return { expanded: !prevState.expanded }
    })
  }

  render() {
    const item = this.props.item;
    return (
      <A11YItemWrapper href={'#' + item.id} item={item} onClick={this.toggle.bind(this)}>
        <A11YTitle>{item.detail.name}</A11YTitle>
        <A11YDetail display={this.state.expanded}>
          {item.detail.moreInfo}
        </A11YDetail>
      </A11YItemWrapper>
    )
  }
}

export default A11YItem;
