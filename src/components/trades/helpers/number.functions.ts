export interface ITradePriceCalculation {
  totalTradePrice: number,
  averageTradePrice: number,
  lowTradePrice: number,
  highTradePrice: number
}

export function getTradePriceCalculations(tradePricesArray: number[]){
  let totalTradePrice = tradePricesArray.reduce((a, b) => a + b, 0);
  return {
    totalTradePrice: totalTradePrice,
    averageTradePrice: (totalTradePrice/tradePricesArray.length),
    lowTradePrice: Math.min(...tradePricesArray),
    highTradePrice: Math.max(...tradePricesArray)
  }
}