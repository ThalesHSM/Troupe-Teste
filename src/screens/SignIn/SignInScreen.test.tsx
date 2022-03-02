import * as React from 'react';
import { shallow } from 'enzyme';

import SignInScreen from './SignInScreen';

describe('MyComponent', () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<SignInScreen />);
  });

  it('should render the SignInScreen', () => {
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
