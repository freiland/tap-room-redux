import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Keg (props) {

  // let pourButton;
  // let restockButton;

  return (
    <React.Fragment>
      <div class='card'>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h2>{props.name}</h2>
      </div>
      
        
        <h4>{props.quantity}</h4>
      
      
      <Button onClick={() => props.whenPourClicked(props.id)}>Pour!</Button>
          <button onClick={() => props.whenStockClicked(props.id)}>Restock</button>
          </div>
        
    </React.Fragment>
  )

}

Keg.propTypes = {
  name: PropTypes.string,
  pintsAvail: PropTypes.number,
  brand: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  alcoholContent: PropTypes.number,
  id: PropTypes.number, 
  whenKegClicked: PropTypes.func,
  WhenPourClicked: PropTypes.func, 
  WhenStockClicked: PropTypes.func

};

export default Keg; 





