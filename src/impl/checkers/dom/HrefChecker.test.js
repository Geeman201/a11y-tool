import React from 'react';
import {mount} from 'enzyme';
import AChecker from './HrefChecker';
import {SuccessResult} from '../../../core/results/Results';

describe('The Link Checker should', () => {

  it('should expect only A elements: Negative test', () => {
    const actual = AChecker.expects(mount(<li></li>).getDOMNode());
    expect(actual).toBe(false);
  });

  it('should expect only A elements: Positive test', () => {
    const actual = AChecker.expects(mount(<a></a>).getDOMNode());
    expect(actual).toBe(true);
  });

  it('should return an error when there is no HREF present', () => {
    const HTML = mount(<a></a>).getDOMNode();
    const actual = new AChecker().execute(HTML);
    expect(actual.detail.moreInfo).toBe('No HREF present');
  });

  it('should return an error when the HREF is only a #', () => {
    const HTML = mount(<a href="#"></a>).getDOMNode();
    const actual = new AChecker().execute(HTML);
    expect(actual.detail.moreInfo).toBe('HREF should go to an anchor on the page. \'#\' is not one of these!');
  });

  it('should return an error when the HREF is executing JS', () => {
    const HTML = mount(<a href="javascript:void(0)"></a>).getDOMNode();
    const actual = new AChecker().execute(HTML);
    expect(actual.detail.moreInfo).toBe('Executing javascript through a HREF is considered bad practice');
  });

  it('should return a success when the HREF is valid', () => {
    const HTML = mount(<a href="#AboutTests">Tests</a>).getDOMNode();
    const actual = new AChecker().execute(HTML);
    expect(actual).toEqual(jasmine.any(SuccessResult));
  });

});
