import React from 'react';
import PopupWrapper from './StyledPopup';
import Header from '../Header';
import Tabs from '../Tabs';
import Tab from '../Tabs/Tab';
import A11YItem from '../A11YItem';
import SettingsTab from '../SettingsTab';

const Popup = ({ messages, hash }) => (
  <PopupWrapper>
    <Header>A11Y Tool</Header>
    <Tabs>
      <Tab label="Report">
        {messages.map((item, index) => (
          <A11YItem key={index} href={'#' + item.id} expanded={hash.indexOf(item.id) >= 0} item={item}>{item.detail.name}</A11YItem>
        ))}
      </Tab>
      <Tab label="Other">
        <SettingsTab messages={messages} />
      </Tab>
    </Tabs>
  </PopupWrapper>
);

export default Popup;
