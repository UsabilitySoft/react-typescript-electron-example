import React, { useState } from 'react';
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
  row: ITradeRow;
}

export const TradeRow: React.FC<ITradeRowProps> = (props) => {

  const [row] = useState<ITradeRow | undefined>(props.row);

  return (
      <TableRow key={row.id}>
        <TableCell component="th" scope="row">{row.product_name}</TableCell>
        <TableCell>{row.book_name}</TableCell>
        <TableCell>{row.cancelled}</TableCell>
        <TableCell>{row.end_date}</TableCell>
        <TableCell>{row.matched_trade}</TableCell>
        <TableCell>{row.side}</TableCell>
        <TableCell>{row.start_date}</TableCell>
        <TableCell>{row.time_created}</TableCell>
        <TableCell>{row.trade_date}</TableCell>
        <TableCell>{row.trade_display_volume}</TableCell>
        <TableCell>{row.trade_price}</TableCell>
      </TableRow>
  );
};