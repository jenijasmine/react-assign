import React from 'react';
import OwnerCard from './OwnerCard'
import ReactHtmlParser from 'react-html-parser';
import glamorous from 'glamorous';

const AnswerDiv = glamorous.div({
    padding : '10px',
    margin : '5px',
    borderBottom : '1px solid #999',
    borderLeft : '10px solid white',
    display : 'flex',
    flexFlow : 'row wrap',
    ':hover' : {
        backgroundColor : '#eeeeee',
    }},
    (props) => ({
        borderLeft : props.accepted? '10px solid #6f6' : 'inherit',
    }
))
const AnswerBody = glamorous.div({
    width : '850px',
})
const AnswerCard = (props) => {
    var answers = [];
    if(props.answer_count > 0)
    {
        props.answers.map((answer,i) => {
            const answer_body = answer.body;
            let pr = {accepted : answer.is_accepted};
            //if(answer.is_accepted) cname += "answered";
            answers.push(
            <AnswerDiv {...pr} key={i} >
                <AnswerBody>{ReactHtmlParser(answer_body)}</AnswerBody>
                <OwnerCard {...answer.owner}/>
            </AnswerDiv>);
            return 1;
    })}
    return(
        <div>
            <h3>Answers</h3>
            {answers.length > 0 ? answers : <h3>No answers yet</h3>}
        </div>
    )
}
export default AnswerCard;