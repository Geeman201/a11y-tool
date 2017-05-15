import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';

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

  moreInfo(e) {
    e.stopPropagation();
    window.open(this.props.item.detail.helpUrl, '_blank')
  }

  displayHTML(e) {
    e.stopPropagation();
    var tmp = document.createElement("div");
    tmp.appendChild(this.props.item.node.cloneNode(true));
    console.group(`${this.props.item.detail.name} | ${this.props.item.detail.moreInfo}`);
    console.group('Recommended Remediation work');
    console.log(this.props.item.remediation);
    console.log(`Further resources can be found at `, this.props.item.detail.helpUrl);
    console.groupEnd();
    console.log('Right click node below & \'Reveal in elements pane\' for further context');
    console.log(this.props.item.node);
    console.groupEnd();
  }

  render() {
    const item = this.props.item;
    return (
      <A11YItemWrapper href={'#' + item.id} item={item} onClick={this.toggle.bind(this)}>
        <A11YTitle>{item.detail.name}</A11YTitle>
        <A11YDetail display={this.state.expanded}>
          {item.detail.moreInfo}
          <Button onClick={this.displayHTML.bind(this)}>Print to console offending HTML</Button>
          <Button onClick={this.moreInfo.bind(this)}>Learn More</Button>
        </A11YDetail>
      </A11YItemWrapper>
    )
  }
}

export default A11YItem;
