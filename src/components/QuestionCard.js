import React from 'react';
import OwnerCard from './OwnerCard';
import glamorous from 'glamorous';

//styling components
const QuestionCardDiv = glamorous.div({
    padding : '15px',
    width: '500px',
    display : 'flex',
    flexFlow : 'column wrap'
})
const CardTitlelabel = glamorous.label({
    fontSize : '1em',
    color : 'blue',
    cursor: 'pointer'
})
const CardContentDiv = glamorous.div({
  padding : '10px',
  display : 'flex',
  flexFlow : 'row wrap',
  justifyContent : 'space-between'
})
const tagsSpan = glamorous.span({
  fontSize : '0.8em',
})
const ScoreDiv = glamorous.div({
  width : '70px',
  height : '70px',
  borderRadius : '100%',

  fontSize : '0.9em',
  display : 'flex',
  flexDirection : 'column',
})
const AnswersCountDiv = ScoreDiv;
const Label = glamorous.label({
  marginTop : '10px',
  alignSelf : 'center',
})
const Tag = glamorous.label({
  fontSize: '0.9em',
  padding : '5px',
  margin : '2px',
  backgroundColor : '#8ff',
  alignSelf: 'flex-end',
})
const QuestionCard = (props) => {
  var tags = [];
  props.tags.map((tag,i) =>
    tags.push(<Tag key={i}>{tag}</Tag>));

  return (
    <QuestionCardDiv>
      <CardTitlelabel onClick={() => props.handleCardClick(props.answer_count)}>{props.title}</CardTitlelabel>
      <CardContentDiv>
        <ScoreDiv>
          <Label>Score</Label>
          <Label>{props.score}</Label>
        </ScoreDiv>
        <AnswersCountDiv>
          <Label>Answers</Label>
          <Label>{props.answer_count}</Label>
        </AnswersCountDiv>
        <OwnerCard {...props.owner}/>
      </CardContentDiv>
      <tagsSpan>{tags}</tagsSpan>
    </QuestionCardDiv>
  );
}

export default QuestionCard;