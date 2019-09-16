import React from 'react';
import Card from './Card';
import glamorous from  'glamorous';
const Div = glamorous.div({
  padding : '10px',
  display : 'flex',
  flexFlow : 'row wrap',
  justifyContent : 'center'
})

const DisplayResults = (props) => {
  let resultItems = [];
  if(props.items) {
    props.items.map((item,i) => 
    resultItems.push(<Card key={i} item={item}/>)
  )
  }
 
  return (
    <Div className="displayresults">
     {resultItems}
    </Div>
      );
}

export default DisplayResults;