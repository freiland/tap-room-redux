import React from 'react';
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";g

class ItemControl extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false, 
    masterKegList: [],
    kegQuantity: 0,
    selectedKeg: null
  };
}


render(){
  let currentVisibleState = null;
  let buttonText = null;
  if (this.state.selectedKeg != null) {
    currentVisibleState = <KegDetail item = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg}/>
    buttonText = 'Return to Keg List'

  }
  
  else if(this.state.formVisibleOnPage) {
    currentVisibleState = <NewKegForm onNewItemCreation={this.handleAddingNewKegToList} />;
    buttonText = "Return to Keg List";
  } else {
    currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onPourKeg={this.handlePouringKeg} onStockKeg={this.handleRestockingKeg} />;
    
    // currentVisibleState = <ItemList onBuyItem={this.state.handleBuyingItem} />;
    buttonText = "Add New Item"
  }
  return (
    <React.Fragment>
      {currentVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}
}



export default KegControl;
