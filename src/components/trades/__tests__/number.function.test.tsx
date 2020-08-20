
import { getTradePriceCalculations } from '../helpers/number.functions';

const mockPricesArray = [10, 8];

describe('Trade Price Calculations', () => {

  const tradePriceCalculations: any = getTradePriceCalculations(mockPricesArray);

  test('Total trade price ', () => {
    expect(tradePriceCalculations.totalTradePrice).toEqual(18);
  });

  test('Average trade price ', () => {
    expect(tradePriceCalculations.averageTradePrice).toEqual(9);
  });

  test('Low trade price ', () => {
    expect(tradePriceCalculations.lowTradePrice).toEqual(8);
  });

  test('High trade price ', () => {
    expect(tradePriceCalculations.highTradePrice).toEqual(10);
  });
});