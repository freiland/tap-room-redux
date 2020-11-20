import React from 'react';
import PropTypes from 'prop-types';

function Keg (props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClciked(props.id)}>
        <Button id = 'detailButton'>Show Details </Button>
      </div>
      <h2>{props.name}</h2>
      <h3></h3>

    </React.Fragment>
  )

}

Keg.propTypes = {
  name: PropTypes.string,
  pintsAvail: PropTypes.number,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  id: PropTypes.number, 
  whenKegClicked: PropTypes.func,
  WhenPourClicked: PropTypes.func, 
  WhenStockClicked: PropTypes.func

};

export default Keg; 