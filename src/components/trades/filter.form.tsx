import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { IFilter } from './filter.interface';

export function FilterForm(props) {
  
  const [search, setSearch] = useState('');
  const [broker, setBroker] = useState('');
  const [side, setSide] = useState('');

  const clearForm = () => {
    setSearch('');
    setBroker('');
    setSide('');
  };

  const applyFilter = () => {
    props.onChange({
      search: search,
      broker: broker,
      side: side
    });
  };

  return (
    <div>
      <div>
        <TextField value={search} 
          onChange={e => setSearch(e.target.value)} label="Search Product Name..." />
      </div>
      <div>
        <FormControl>
          <InputLabel id="broker-label">Broker</InputLabel>
          <Select
            labelId="broker-label"
            value={broker}
            onChange={e => setBroker(e.target.value)}
            >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Amerex">Amerex</MenuItem>
            <MenuItem value="BGC Radix">BGC Radix</MenuItem>
            <MenuItem value="Bruggerman">Bruggerman</MenuItem>
            <MenuItem value="EDF">EDF</MenuItem>
            <MenuItem value="FCStone">FCStone</MenuItem>
            <MenuItem value="FCStone Sing">FCStone Sing</MenuItem>
            <MenuItem value="Ginga Sing">Ginga Sing</MenuItem>
            <MenuItem value="Internal">Internal</MenuItem>
            <MenuItem value="OB">OB</MenuItem>
            <MenuItem value="PVM">PVM</MenuItem>
            <MenuItem value="PVM Sing">PVM Sing</MenuItem>
            <MenuItem value="Spectron">Spectron</MenuItem>
            <MenuItem value="Star Sing">Star Sing</MenuItem>
            <MenuItem value="TFS">TFS</MenuItem>
            <MenuItem value="Tulletts">Tulletts</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <InputLabel id="side-label">Side</InputLabel>
          <Select
            labelId="side-label"
            value={side}
            onChange={e => setSide(e.target.value)}
            >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="buy">Buy</MenuItem>
            <MenuItem value="sell">Sell</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Button 
          variant="contained" 
          color="secondary"
          onClick={() => clearForm()}>
          Clear
        </Button>
          &nbsp;&nbsp;
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => applyFilter()}>
          Apply
        </Button>
      </div>
    </div>
  );
}