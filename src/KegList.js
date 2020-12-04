import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import NewKegForm from './NewKegForm';


function KegList(props) {

  function handlePouringKegSubmission(event) {
    event.preventDefault();
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      <hr />
      
      {Object.values(props.KegList).map((keg) =>
        <Keg
          whenKegClicked = { props.onKegSelection }
          name={keg.name}
          pintsAvail={keg.pintsAvail}
          id={ticket.id}
          key={ticket.id}/>
      )}
      
    </React.Fragment>
  );
};

KegList.propTypes = {
  kegList: PropTypes.object, 
  onKegSelection: PropTypes.func,
  onPourKeg: PropTypes.func, 
  onStockKeg: PropTypes.func

}

export default KegList; 
