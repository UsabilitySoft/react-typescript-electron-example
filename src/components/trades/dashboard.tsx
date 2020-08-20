import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { FilterForm } from './filter.form';
import { IFilter } from './filter.interface';
import { Titles } from '../../helpers/language';
import { SummaryCard } from './summary.card';
import { TradesTable } from './table';
import { getTradesData } from './api';
import { ITradePriceCalculation, getTradePriceCalculations } from './helpers/number.functions';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const defaultTradeCalcs = {
  totalTradePrice: 0,
  averageTradePrice: 0,
  lowTradePrice: 0,
  highTradePrice: 0
}

export default function Dashboard() {

  const [tradesData, setTradesData] = useState(undefined);
  const [filter, setFilter] = useState<IFilter | undefined>(undefined);
  const [tradePriceCalculations, setTradePriceCalculations] = useState<ITradePriceCalculation>(defaultTradeCalcs);
  const [rowCount, setRowCount] = useState(0);
  
  const handleFilterChange = (filter: IFilter) => {
    setFilter(filter);
  }

  useEffect(() => {
    getTradesData(filter)
      .then(data => {
        data = data.splice(0, 10)
        setTradesData(data);
        let tradePrices = data.map((a: any) => a.trade_price-0);
        let tradePriceCalculations = getTradePriceCalculations(tradePrices)
        setTradePriceCalculations(tradePriceCalculations);
        setRowCount(data.length);
      })
      .catch(error => console.log(error.message))
  }, [filter]);

  return (
    <ThemeProvider theme={darkTheme}>
      
      <FilterForm onChange={handleFilterChange}></FilterForm>
      <SummaryCard title={Titles.AVERAGE_TRADE_PRICE.TITLE} value={tradePriceCalculations.averageTradePrice.toFixed(3)}></SummaryCard>
      <SummaryCard title={Titles.TOTAL_TRADE_PRICE.TITLE} value={tradePriceCalculations.totalTradePrice.toFixed(3)}></SummaryCard>
      <SummaryCard title={Titles.RESULTS.TITLE} value={rowCount}></SummaryCard>
      
      { tradesData ? 
        <TradesTable 
          tradesData={tradesData} 
          lowTradePrice={tradePriceCalculations.lowTradePrice}
          highTradePrice={tradePriceCalculations.highTradePrice}></TradesTable>
      : 
        <div>
          <CircularProgress />
        </div>
      }

    </ThemeProvider>
  );
};