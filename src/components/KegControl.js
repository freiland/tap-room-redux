import React from 'react';
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';
import * as a from '../actions/Index';
import { propTypes } from 'react-bootstrap/esm/Image';



class KegControl extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    //formVisibleOnPage: false, 
    masterKegList: [],
    pintsAvail: 0,
    selectedKeg: null
  };
  //this.handleClick = this.handleClick.bind(this);
}

// handleAddingNewTicketToList = (newTicket) => {
//   const { dispatch } = this.props;
//   const action = a.addTicket(newTicket);
//   dispatch(action);
//   const actionTwo = a.toggleForm();
//   dispatch(actionTwo);

handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    //const { name, pintsAvail, id } = newKeg;
  const action = a.addTicket(newKeg);
  dispatch(action);
  const actionTwo = a.toggleForm();
  dispatch(actionTwo);
  }

// handleClick = () => {
//   this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
// }


handleClick = () => {
  if (this.state.selectedKeg != null) {
    this.setState({
      selectedKeg: null,
      editing: false
    });
  } else {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
}

handleDeletingKeg = (id) => {
  const { dispatch } = this.props;
  
  const action = a.deleteKeg(id);
  dispatch(action);
  this.setState({selectedKeg: null});
}


handleEditingKegInList = (kegToEdit) => {
  const { dispatch } = this.props;
  const action = a.addKeg(kegToEdit);
  dispatch(action);
  this.setState({
    editing: false,
    selectedKeg: null
  });
}





handlePouringKeg = (id) => {
  const newMasterKegList = this.state.masterKegList;
  newMasterKegList.map((keg) => {
    if (keg.id === id && keg.quantity > 0) {
      keg.quantity -= 1;
    } else if (keg.id === id && keg.quantity === 0 ) {
      keg.quantity = 'empty';
    }
    return keg; 
  });
  this.setState({masterKegList: newMasterKegList}); 
};

render(){
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.selectedKeg != null) {
    currentlyVisibleState = <KegDetail item = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg}/>
    buttonText = 'Return to Keg List'

  }
  
  else if(this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
    buttonText = "Return to Keg List";
  } else {
    currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onPourKeg={this.handlePouringKeg} onStockKeg={this.handleRestockingKeg} />;
    
    // currentVisibleState = <ItemList onBuyItem={this.state.handleBuyingItem} />;
    buttonText = "Add New Keg"
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}
}

KegControl.propTypes = {
  masterKegList: propTypes.object,
  formVisibleOnPage: propTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state,
    formVisibleOnPage: state.formVisibleOnPage
  }
};

KegControl = connect(mapStateToProps)(KegControl);



export default KegControl;
