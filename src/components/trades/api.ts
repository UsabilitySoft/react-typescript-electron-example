import { Endpoints } from '../../helpers/api.endpoints';
import { IFilter } from './filter.interface';

export async function getTradesData(filter: IFilter) {
  let response = await fetch(Endpoints.TRADES,
    {
      method: "GET",
      headers: new Headers({
        Accept: "application/json"
      })
    }
  )
  let data = await response.json();

  if(filter && filter.search){
    data = data.filter(a => a.product_name.toLowerCase().indexOf(filter.search.toLowerCase()) !== -1)    
  }
  if(filter && filter.broker){
    data = data.filter(a => a.broker_name.toLowerCase().indexOf(filter.broker.toLowerCase()) !== -1)
  }
  if(filter && filter.side){
    data = data.filter(a => a.side.toLowerCase().indexOf(filter.side.toLowerCase()) !== -1)
  }
  return data
}

export function getAverageTradePrice(tradePricesArray: []){
  let totalTradePrices = getTotalTradePrice(tradePricesArray);
  return (totalTradePrices/tradePricesArray.length).toFixed(3);
}

export function getTotalTradePrice(tradePricesArray: []){
  let totalTradePrices = tradePricesArray.reduce((a, b) => a + b, 0);
  return totalTradePrices.toFixed(3);
}