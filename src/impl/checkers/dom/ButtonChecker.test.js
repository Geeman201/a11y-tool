import React from 'react';
import '../../../core/workers/NodeWorker';
import {render} from '../../../core/testing';
import AChecker from './ButtonChecker';
import {SuccessResult} from '../../../core/results/Results';

describe('The Button Checker should', () => {

  it('should expect only Button elements: Negative test', () => {
    const actual = AChecker.expects(render(<li></li>));
    expect(actual).toBe(false);
  });

  it('should expect only Button elements: Positive test', () => {
    const actual = AChecker.expects(render(<button></button>));
    expect(actual).toBe(true);
  });

  it('should return an error when there is no text present', () => {
    const HTML = render(<button></button>);
    const actual = AChecker.execute(HTML);
    expect(actual.detail.moreInfo).toBe('Buttons should not start with words like \"here\", \"go\", \"next\" or \"prev\"');
  });

  it('should return an error when button text is "here"', () => {
    const HTML = render(<button>here</button>);
    const actual = AChecker.execute(HTML);
    expect(actual.detail.moreInfo).toBe('Buttons should not start with words like \"here\", \"go\", \"next\" or \"prev\"');
  });

  it('should return an error when the button text is "Go"', () => {
    const HTML = render(<button>go</button>);
    const actual = AChecker.execute(HTML);
    expect(actual.detail.moreInfo).toBe('Buttons should not start with words like \"here\", \"go\", \"next\" or \"prev\"');
  });

  it('should return an error when the button text is "prev"', () => {
    const HTML = render(<button>prev</button>);
    const actual = AChecker.execute(HTML);
    expect(actual.detail.moreInfo).toBe('Buttons should not start with words like \"here\", \"go\", \"next\" or \"prev\"');
  });

  it('should return an error when the button text is "next"', () => {
    const HTML = render(<button>next</button>);
    const actual = AChecker.execute(HTML);
    expect(actual.detail.moreInfo).toBe('Buttons should not start with words like \"here\", \"go\", \"next\" or \"prev\"');
  });

  it('should return success when the button contains the buzzwords with other words', () => {
    const HTML = render(<button >next page</button>);
    const actual = AChecker.execute(HTML);
    expect(actual).toEqual(jasmine.any(SuccessResult));
  });

  it('should return success when the button contains the buzzwords with other words', () => {
    const HTML = render(<button >go to backups</button>);
    const actual = AChecker.execute(HTML);
    expect(actual).toEqual(jasmine.any(SuccessResult));
  });


  it('should return success when the button contains none of the buzzwords', () => {
    const HTML = render(<button >Tests</button>);
    const actual = AChecker.execute(HTML);
    expect(actual).toEqual(jasmine.any(SuccessResult));
  });

});
