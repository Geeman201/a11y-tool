import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './spec/Standard';
import Runner from './core/Runner';

//  language=SCSS
const MenuBox = styled.div`
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

//  language=SCSS
const Header = styled.h1`
  & {
    font-family: Consolas;
    font-size: 18px;
    padding: 18px;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
  }
`;

// language=SCSS
const Tabs = styled.ul`
  & {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
    width: 100%;
  }
`;

// language=SCSS
const TabTitleWrapper = styled.li`
  & {
    width: 50%;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
// language=SCSS
const TabTitle = styled.a`
  & {
    padding: 10px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    display: block;
    color: #F4EB49;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1)
  }
`;

// language=SCSS
const TabContentWrapper = styled.div`
  & {
    overflow-y: auto;
    height: 292px;
  }
`;

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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { errors: [], warnings:[], success:[] };
  }

  componentDidMount() {
    const messages = new Runner().run();
    this.setState(
      {
        errors: messages.filter((msg) => msg.type === 'ERROR'),
        warnings: messages.filter((msg) => msg.type === 'WARNING'),
        success: messages.filter((msg) => msg.type === 'SUCCESS')
      }
    );
    messages.forEach((message) => {
      const loc = message.node.getBoundingClientRect();

      ReactDOM.render(<div>Hello world</div>, message.node)
    })
  }

  render() {
    return (
      <MenuBox>
        <Header>A11Y Tool</Header>
        <Tabs>
          <TabTitleWrapper>
            <TabTitle href="#">Report</TabTitle>
          </TabTitleWrapper>
          <TabTitleWrapper>
            <TabTitle href="#">Settings</TabTitle>
          </TabTitleWrapper>
        </Tabs>
        <TabContentWrapper>
          {this.state.errors.map((error) => (
            <A11YItem href={'#' + error.id} item={error}>{error.detail.name}</A11YItem>
          ))}
          {this.state.warnings.map((error) => (
            <A11YItem href={'#' + error.id} item={error}>{error.detail.name}</A11YItem>
          ))}
        </TabContentWrapper>
      </MenuBox>
    );
  }
}

export default App;
