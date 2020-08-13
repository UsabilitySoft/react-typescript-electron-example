import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import { Fields } from '../../helpers/language';
import { ITradeRow, TradeRow } from './table.row';

interface ITradesTableProps {
  tradesData: ITradeRow[];
}

export const TradesTable: React.FC<ITradesTableProps> = (props) => {

  return (
    <Table padding="default">
      <TableHead>
        <TableRow>
          <TableCell>{Fields.PRODUCT_NAME.TITLE}</TableCell>
          <TableCell>{Fields.BOOK_NAME.TITLE}</TableCell>
          <TableCell>{Fields.CANCELLED.TITLE}</TableCell>
          <TableCell>{Fields.END_DATE.TITLE}</TableCell>
          <TableCell>{Fields.MATCHED_TRADE.TITLE}</TableCell>
          <TableCell>{Fields.SIDE.TITLE}</TableCell>
          <TableCell>{Fields.START_DATE.TITLE}</TableCell>
          <TableCell>{Fields.TIME_CREATED.TITLE}</TableCell>
          <TableCell>{Fields.TRADE_DATE.TITLE}</TableCell>
          <TableCell>{Fields.TRADE_DISPLAY_VOLUME.TITLE}</TableCell>
          <TableCell>{Fields.TRADE_PRICE.TITLE}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { props.tradesData.map((row: ITradeRow) => {
            return (
              <TradeRow id={row.id} row={row}></TradeRow>
            )
          }) 
        }
      </TableBody>
    </Table>
  );
};