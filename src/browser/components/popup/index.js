import React from 'react';
import PopupWrapper from './StyledPopup';
import Header from '../header';
import Tabs from '../tabs';
import Tab from '../tabs/Tab';
import A11YItem from '../A11YItem';

const Popup = ({ messages }) => (
  <PopupWrapper>
    <Header>A11Y Tool</Header>
    <Tabs>
      <Tab label="Report">
        {messages.map((item, index) => (
          <A11YItem key={index} href={'#' + item.id} item={item}>{item.detail.name}</A11YItem>
        ))}
      </Tab>
      <Tab label="Settings"></Tab>
    </Tabs>
  </PopupWrapper>
);

export default Popup;
