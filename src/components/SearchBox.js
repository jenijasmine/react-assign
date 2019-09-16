import React from 'react';
import {fetchQuestionsByTagUrl} from '../JsonFetch'
import glamorous from 'glamorous';

const SearchBoxDiv = glamorous.div({
  textAlign : 'center'
})
const InputSubmit = glamorous.input({
  backgroundColor : "blue",
  color : '#fff',
  height : '30px'
})
const InputText = glamorous.input({
  height : '25px'
})


class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {value : ""};
    this._handleChange = this._handleChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }
  _handleChange(e){
    this.setState({value : e.target.value});
  }
  _onSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(fetchQuestionsByTagUrl(this.state.value));
  }
  render(){
    return (
      <SearchBoxDiv>
        <form onSubmit={this._onSubmit}>
          <InputText type="text" value={this.state.value} onChange={this._handleChange} placeholder="Enter tag here..." />
          <InputSubmit type="submit" value="Search"/> 
        </form>
      </SearchBoxDiv>
        );
  }
}

export default SearchBox;