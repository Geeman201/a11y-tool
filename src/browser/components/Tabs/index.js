import React, { Component } from 'react';
import TabNavbarWrapper from './TabNavbarWrapper';
import TabNavItem from './TabNavItem';
import TabContentWrapper from './TabContentWrapper';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected ? this.props.selected : 0
    };
  }

  onNavClick(index, e) {
    e.preventDefault();
    this.setState({ selected: index });
  }

  render() {
    return (
      <div>
        <TabNavbarWrapper>
          {this.props.children.map((child, index) => (
            <TabNavItem key={index} label={child.props.label} active={index === this.state.selected} onSelected={this.onNavClick.bind(this, index)} />
          ))}
        </TabNavbarWrapper>
        <TabContentWrapper>
          {this.props.children[this.state.selected]}
        </TabContentWrapper>
      </div>
    )
  }

}

export default Tabs;
