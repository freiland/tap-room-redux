import React from 'react';
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';

KegControl = connect()(KegControl);

class KegControl extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false, 
    masterKegList: [],
    pintsAvail: 0,
    selectedKeg: null
  };
  //this.handleClick = this.handleClick.bind(this);
}

handleAddingNewKegToList = (newKeg) => {
  const newMasterKegList = this.state.masterKegList.concat(newKeg);
  this.setState({masterKegList: newMasterKegList,
                formVisibleOnPage: false });
  }

// handleClick = () => {
//   this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
// }


handleClick = () => {
  if (this.state.selectedKeg != null) {
    this.setState({
      formVisibleOnPage: false,
      selectedFlavor: null
    });
  } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
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



export default KegControl;
