import React, {Component} from 'react';
import Button from '../Button';
import styled from 'styled-components';
import ConsoleHelpers from '../../../core/ConsoleHelpers';

//language=SCSS
const ContentWrapper = styled.div`
  & {
    padding: 10px;
  }
`;

class SettingsTab extends Component {

  showAll() {
    window.location.hash = '*';
  }

  printAll() {
    this.props.messages.forEach((message) => {
      ConsoleHelpers.printResult(message);
    });
  }

  render () {
    return (
      <ContentWrapper>
        <Button onClick={this.showAll.bind(this)}>Show all failures</Button>
        <Button onClick={this.printAll.bind(this)}>Print all to console</Button>
      </ContentWrapper>
    )
  }
}

export default SettingsTab;
