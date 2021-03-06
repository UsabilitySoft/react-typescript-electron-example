import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

export interface ITradeRow {
  id: number;
  book_name: string;
  cancelled: string;
  end_date: Date;
  matched_trade?: string;
  product_name: string;
  side: string;
  start_date: Date;
  time_created: Date;
  trade_date: Date;
  trade_display_volume: number;
  trade_price: number;
}

interface ITradeRowProps {
  row: ITradeRow,
  lowTradePrice: number,
  highTradePrice: number
}

export const TradeRow: React.FC<ITradeRowProps> = (props) => {

  const row = props.row;

  return (
      <TableRow key={row.id}>
        <TableCell>{row.side.toUpperCase()}</TableCell>
        <TableCell>{row.trade_date}</TableCell>
        <TableCell>{row.product_name}</TableCell>
        <TableCell>{row.book_name}</TableCell>
        <TableCell style={
          row.trade_price == props.lowTradePrice ? { color: 'red' } : 
          row.trade_price == props.highTradePrice ? { color: 'green' } : undefined
        }>{(row.trade_price-0).toFixed(2)}</TableCell>
        <TableCell>{(row.trade_display_volume-0).toFixed(0)}</TableCell>
        <TableCell>{row.cancelled}</TableCell>
        <TableCell>{row.matched_trade}</TableCell>
        <TableCell>{row.start_date}</TableCell>
        <TableCell>{row.end_date}</TableCell>
        <TableCell>{row.time_created}</TableCell>
      </TableRow>
  );
};