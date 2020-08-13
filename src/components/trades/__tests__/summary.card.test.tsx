import React from 'react';
import renderer from 'react-test-renderer';

import { SummaryCard } from '../summary.card';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<SummaryCard />).toJSON();
  expect(tree).toMatchSnapshot();
});