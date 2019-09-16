import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import DisplayResults from './components/DisplayResults'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      sfoJson : null 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateJsonState = this.updateJsonState.bind(this);
  }
  updateJsonState(json){
    //console.log(json);
    this.setState({sfoJson : json});
  }
  handleSubmit(url){
    fetch(url).then(response => response.json()).then(json => this.updateJsonState(json));
  }
  render() {
    const {sfoJson} = this.state;
    return (
      <div className="App">
        <SearchBox handleSubmit={this.handleSubmit}/>
        {this.state.sfoJson && <DisplayResults handleCardClick={this.handleCardClick} items={sfoJson.items} />}
      </div>
    );
  }
}

export default App;