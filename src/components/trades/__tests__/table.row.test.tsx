import React from 'react';
import renderer from 'react-test-renderer';

import { mockRow } from '../../../helpers/sample.data';
import { TradeRow } from '../table.row';

it('renders correctly when there is one row', () => {
  const tree = renderer.create(<TradeRow row={mockRow} />).toJSON();
  expect(tree).toMatchSnapshot();
});