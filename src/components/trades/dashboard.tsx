import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { FilterForm } from './filter.form';
import { IFilter } from './filter.interface';
import { Titles } from '../../helpers/language';
import { SummaryCard } from './summary.card';
import { TradesTable } from './table';
import { getTradesData, getAverageTradePrice, getTotalTradePrice } from './api';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function Dashboard() {

  const [tradesData, setTradesData] = useState<ITrades | undefined>([]);
  const [filter, setFilter] = useState<IFilter | undefined>(undefined);
  const [averageTradePrice, setAverageTradePrice] = useState(0);
  const [totalTradePrice, setTotalTradePrice] = useState(0);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  }

  useEffect(() => {
    getTradesData(filter)
      .then(data => {
        setTradesData(data);
        let tradePrices = data.map(a => a.trade_price-0);
        setAverageTradePrice(getAverageTradePrice(tradePrices));
        setTotalTradePrice(getTotalTradePrice(tradePrices));
        console.log(data);
      })
      .catch(error => console.log(error.message))
  }, [filter]);

  return (
    <ThemeProvider theme={darkTheme}>
      
      <FilterForm onChange={handleFilterChange}></FilterForm>

      <SummaryCard title={Titles.AVERAGE_TRADE_PRICE.TITLE} value={averageTradePrice}></SummaryCard>
      <SummaryCard title={Titles.TOTAL_TRADE_PRICE.TITLE} value={totalTradePrice}></SummaryCard>
      
      { tradesData ? 
        <TradesTable tradesData={tradesData}></TradesTable>
      : 
        <div>
          <CircularProgress />
        </div>
      }

    </ThemeProvider>
  );
};