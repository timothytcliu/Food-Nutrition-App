import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NutrientDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // toggles dropdown
  const toggle = () => setDropdownOpen(prevState => !prevState);

  // Renders dropdown menu, mapping each nutrient to a DropdownItem component.
  // Allows each option to call handleEvents.
  // DropdownToggle displays from state the current selected nutrient option from dropdown.
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} size="lg">
      <DropdownToggle caret outline color="secondary">
        {props.selectedNutrient}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Select a nutrient </DropdownItem>
        {props.nutrients.map(nutrient => {
          return (
            <DropdownItem key={nutrient}>
              <div onClick={props.handleEvents}>{nutrient}</div>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default NutrientDropdown;
