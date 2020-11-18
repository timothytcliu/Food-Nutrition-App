import React from 'react';
import { Table } from 'reactstrap';

// This component only displays if foodData is truthy, which is after the GET request response is successful.
// Displays all data sent from backend in detailed tables.
// Data from sent from backend is expected to be an array. map() is used to render dynamically.
const DisplayTable = props => {
  if (!props.foodData) {
    return null;
  } else {
    return props.foodData.map(food => {
      return (
        <div key={food.ndbno}>
          <h4 style={{ color: 'blue' }}>{food.name}</h4>
          <h5>
            Weight: {food.weight} | Measure: {food.measure} | ndbno:{' '}
            {food.ndbno}
          </h5>
          <Table responsive>
            <thead>
              <tr>
                <th>Nutrient Name</th>
                <th>Value</th>
                <th>gm</th>
                <th>Nutrient ID</th>
              </tr>
            </thead>
            <tbody>
              {food.nutrients.map(nutrient => {
                return (
                  <tr key={nutrient.nutrient_id}>
                    <th scope="row">{nutrient.nutrient}</th>
                    <td>
                      {nutrient.value} {nutrient.unit}
                    </td>
                    <td>{nutrient.gm}</td>
                    <td>{nutrient.nutrient_id}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    });
  }
};

export default DisplayTable;
