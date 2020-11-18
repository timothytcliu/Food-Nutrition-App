import React, { useState } from 'react';
import NutrientDropdown from './Components/NutrientDropdown';
import ValueInputs from './Components/ValueInputs';
import DisplayTable from './Components/DisplayTable';
import { Container, Row, Col, Badge, Jumbotron } from 'reactstrap';
import { Button } from 'reactstrap';
import axios from 'axios';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [nutrients] = useState([
    'Alcohol, ethyl (g)',
    'Protein (g)',
    'Total lipid (fat) (g)',
    'Carbohydrate, by difference (g)',
    'Sugars, total (g)',
    'Ash (g)',
    'Energy (kcal)',
    'Fiber, total dietary (g)',
  ]);
  const [selectedNutrient, setSelectedNutrient] = useState('Select a nutrient');
  const [nutrientQueryValue, setNutrientQueryValue] = useState(null);
  // assigns selectedNutrient to the nutrient selected from the dropdown menu
  const [minValue, setMinValue] = useState('0');
  // 716 is the max value on the foodlist
  const [maxValue, setMaxValue] = useState('716');

  // sets selectedNutrient to string of selected option from dropdown menu.
  const handleDropdownSelect = selection => {
    setSelectedNutrient(selection.currentTarget.textContent);
  };
  // when called, will assign a corresponding number to nutrientQueryValue.
  // nutrientQueryValue will be used in the API call query string.
  const assignNutrientQueryValue = selection => {
    setNutrientQueryValue(
      nutrients.indexOf(selection.currentTarget.textContent)
    );
  };
  // updates state based on number inputted
  const handleMinValueChange = number => {
    setMinValue(number.target.value);
  };
  const handleMaxValueChange = number => {
    setMaxValue(number.target.value);
  };

  // called by onClick in NutrientDropdown.js
  // function needed to call two separate functions back to back that share the same parameter.
  const handleEvents = nutrient => {
    handleDropdownSelect(nutrient);
    assignNutrientQueryValue(nutrient);
  };

  // Handles the SEARCH button onClick.
  // compiles the URLSearchParams and sends get request to backend.
  // Sets errorMessage to empty string
  const onSearch = () => {
    const url = 'http://localhost:3001/foods?';
    const query = new URLSearchParams({
      nutrient: nutrientQueryValue,
      min: minValue,
      max: maxValue,
    });

    const getFoods = async () => {
      try {
        const res = await axios.get(`${url}${query}`);
        setFoodData(res.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    getFoods();
  };

  return (
    <>
      <Container>
        <h1>
          <Badge>Food Nutrition Sorting App</Badge>
        </h1>
        <Jumbotron>
          <h3>Search for the foods you want by nutritional values you need!</h3>
          <br />
          <Row>
            <Col>
              <NutrientDropdown
                selectedNutrient={selectedNutrient}
                nutrients={nutrients}
                handleEvents={handleEvents}
              />
            </Col>
            <Col>
              <ValueInputs
                minValue={minValue}
                handleMinValueChange={handleMinValueChange}
                maxValue={maxValue}
                handleMaxValueChange={handleMaxValueChange}
              />
            </Col>
            <Col>
              <Button color="primary" onClick={onSearch}>
                SEARCH
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div>
                {!errorMessage && foodData.length > 0 && (
                  <h5>
                    <Badge>Results: {foodData.length}</Badge>
                  </h5>
                )}
              </div>
            </Col>
          </Row>
        </Jumbotron>
        <div>{!errorMessage && <DisplayTable foodData={foodData} />}</div>
        <br />
        {/* This component displaying the error message only displays if errorMessage is truthy */}
        <div>
          {errorMessage && (
            <h5 style={{ color: 'red' }}>
              :( Sorry, your search yielded no results. Please try again.
            </h5>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
