import React from 'react';
import renderer from 'react-test-renderer';

import { mockRow } from '../../../helpers/sample.data';
import { TradesTable } from '../table';

it('renders correctly when there is one row', () => {
  const tree = renderer.create(<TradesTable tradesData={[mockRow]} />).toJSON();
  expect(tree).toMatchSnapshot();
});