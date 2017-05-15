import React from 'react';
import styled from 'styled-components';

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
    color: ${props => props.active ? '#2F2B2F' : '#F4EB49'};
    text-decoration: ${props => props.active ? 'none' : 'underline'};
    background-color: ${props => props.active ? '#F4EB49' : '#2F2B2F'};
  }

  &:hover {
    background-color: ${props => props.active ? '#F4EB49' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const TabNavItem = ({ label, onSelected, active }) => (
  <TabTitleWrapper>
    <TabTitle active={active} onClick={onSelected} href={'#' + label}>{label}</TabTitle>
  </TabTitleWrapper>
);

export default TabNavItem;
