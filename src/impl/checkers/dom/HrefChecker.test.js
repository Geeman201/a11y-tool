import React from 'react';
import '../../../core/workers/NodeWorker';
import {render} from '../../../core/testing';
import AChecker from './HrefChecker';
import {SuccessResult} from '../../../core/results/Results';

describe('The Link Checker should', () => {

  it('should expect only A elements: Negative test', () => {
    const actual = AChecker.expects(render(<li></li>));
    expect(actual).toBe(false);
  });

  it('should expect only A elements: Positive test', () => {
    const actual = AChecker.expects(render(<a></a>));
    expect(actual).toBe(true);
  });

  it('should return an error when there is no HREF present', () => {
    const HTML = render(<a></a>);
    const actual = AChecker.execute(HTML);
    expect(actual.detail.moreInfo).toBe('No HREF present');
  });

  it('should return an error when the HREF is only a #', () => {
    const HTML = render(<a href="#"></a>);
    const actual = AChecker.execute(HTML);
    expect(actual.detail.moreInfo).toBe('HREF should go to an anchor on the page. \'#\' is not one of these!');
  });

  it('should return an error when the HREF is executing JS', () => {
    const HTML = render(<a href="javascript:void(0)"></a>);
    const actual = AChecker.execute(HTML);
    expect(actual.detail.moreInfo).toBe('Executing javascript through a HREF is considered bad practice');
  });

  it('should return a success when the HREF is valid', () => {
    const HTML = render(<a href="#AboutTests">Tests</a>);
    const actual = AChecker.execute(HTML);
    expect(actual).toEqual(jasmine.any(SuccessResult));
  });

});
