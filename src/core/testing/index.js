import React from 'react';
import {mount} from 'enzyme';

export const render = (elem) => (mount(elem).getDOMNode());
