import React from 'react';
import styled from 'styled-components';
import PopupWrapper from './StyledPopup';
import Header from '../Header';
import Tabs from '../Tabs';
import Tab from '../Tabs/Tab';
import A11YItem from '../A11YItem';

//language=SCSS
const ContentWrapper = styled.div`
  & {
    padding: 10px;
  }
`;

const Popup = ({ messages }) => (
  <PopupWrapper>
    <Header>A11Y Tool</Header>
    <Tabs>
      <Tab label="Report">
        {messages.map((item, index) => (
          <A11YItem key={index} href={'#' + item.id} item={item}>{item.detail.name}</A11YItem>
        ))}
      </Tab>
      <Tab label="Settings">

      </Tab>
    </Tabs>
  </PopupWrapper>
);

export default Popup;
