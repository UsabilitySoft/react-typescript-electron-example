import React from 'react';
import renderer from 'react-test-renderer';

import { FilterForm } from '../filter.form';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<FilterForm />).toJSON();
  expect(tree).toMatchSnapshot();
});