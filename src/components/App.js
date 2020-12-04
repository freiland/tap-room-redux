import React from 'react';
import Header from "./Header";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegControl from "./KegControl";
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <div class='jumbotron'>
      <Header />
      
      </div>
      <div class='container'>
      <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
