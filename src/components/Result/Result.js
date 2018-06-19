import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import Bar from './Bar/Bar.js'
import Distribution from './Distribution/Distribution.js'

const ResultText = styled.div`
font-weight:bold;
text-align:center;
margin:0.8em;
`

const BarContainer = styled.div`
display:flex;
width:80%;
`
const Result = styled.div`
display:flex;
flex-wrap:wrap
justify-content:center;

`
const DistributionContainer= styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
width:70%;
`

const RedoButton = styled.button`
display:block;
width:8rem;
color: #fff !important;
text-transform: uppercase;
background: #10aded;
padding: 15px;
border-radius: 5px;
border: none;
margin: 1.3em auto;
cursor:pointer;


&:hover{
background: #434343;
letter-spacing: 1px;
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.1s ease-in 0s;
}
`


const result = (props) => {


  return (
          <React.Fragment>
            <Result>
              <ResultText>You and {props.totalVotes} other think that {props.votes.team1>props.votes.team2?props.teams[0]:props.teams[1]} has better odds</ResultText>
              <BarContainer>
                <Bar active={props.vote==='team1'} fraction={Math.round(((props.votes.team1/props.totalVotes)*100))}/>
                <Bar active={props.vote==='draw'} fraction ={Math.round(((props.votes.draw/props.totalVotes)*100))}/>
                <Bar active={props.vote==='team2'} fraction ={Math.round(((props.votes.team2/props.totalVotes)*100))}/>
              </BarContainer>
              <DistributionContainer>
                <Distribution fraction={Math.round(((props.votes.team1/props.totalVotes)*100))}/>
                <Distribution fraction ={Math.round(((props.votes.draw/props.totalVotes)*100))}/>
                <Distribution fraction ={Math.round(((props.votes.team2/props.totalVotes)*100))}/>
              </DistributionContainer>
            </Result>
            <RedoButton onClick={()=>props.redo(props.vote)}>Redo</RedoButton>
          </React.Fragment>


  )
}



export default result
