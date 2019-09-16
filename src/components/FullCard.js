import React from 'react';
import AnswerCard from './AnswerCard'
import ReactHtmlParser from 'react-html-parser';
import OwnerCard from './OwnerCard';
import glamorous from 'glamorous';

const FullCardDiv = glamorous.div({
    width : '800px',
    padding : '10px'
})
const Title = glamorous.div({
    borderBottom : '1px solid grey',
    fontSize : '1.2em',
    fontWeight : 'bold',
})
const Content = glamorous.div({
    overflow : 'scroll',
    maxHeight : '550px',
})
const Button = glamorous.button({
    float : 'right',
    fontSize : '0.5em',
    fontWeight : 'bold'
})
const Question = glamorous.div({
    padding : '5px',
    display : 'flex',
    flexFlow : 'row nowrap',
    borderBottom : '2px solid grey'
})
const Padding =glamorous.div({
    padding : '10px'
})
const FullCard = (props) => {
    return (
        <FullCardDiv>
            <Title>
                {//<label><a href={props.link}>...open in stackoverflow.com</a><br/></label> 
                }  
                <label className="card-title">{props.title}</label>
                <Button onClick={() => {props.handleCardClick(props.answer_count)}}>X</Button>
            </Title>
            <Content>
                <Question>
                    <Padding>{ReactHtmlParser(props.body)};
                    <OwnerCard {...props.owner}/>
                    </Padding>
                </Question>
                <AnswerCard answer_count={props.answer_count} answers={props.answers}/>
            </Content>
        </FullCardDiv>
    )
}

export default FullCard;