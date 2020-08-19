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
    data = data.filter(a => a.broker_name.toLowerCase() == filter.broker.toLowerCase())
  }
  if(filter && filter.side){
    data = data.filter(a => a.side.toLowerCase() == filter.side.toLowerCase())
  }
  return data
}