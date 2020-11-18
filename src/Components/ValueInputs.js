import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

// Renders two input boxes for user to input numbers needed for search params
const ValueInputs = props => {
  return (
    <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Minimum nutritional value</InputGroupText>
        </InputGroupAddon>
        <Input
          type="text"
          value={props.minValue}
          onChange={props.handleMinValueChange}
          placeholder="0"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Maximum nutritional value</InputGroupText>
        </InputGroupAddon>
        <Input
          type="text"
          value={props.maxValue}
          onChange={props.handleMaxValueChange}
          placeholder="0"
        />
      </InputGroup>
    </>
  );
};

export default ValueInputs;
