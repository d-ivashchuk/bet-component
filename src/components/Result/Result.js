import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Bar from './Bar/Bar.js'
import Distribution from './Distribution/Distribution.js'

const ResultText = styled.div`
font-weight:bold;
text-align:center;
margin:20px;
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


const result = (props) => {


  return (

       <Result>
         <ResultText>You and {props.totalVotes} other think that {props.votes.team1>props.votes.team2?props.teams[0]:props.teams[1]} has better odds</ResultText>
         <BarContainer>
           <Bar active={props.activeBar==='team1'} fraction={Math.round(((props.votes.team1/props.totalVotes)*100))}/>
           <Bar active={props.activeBar==='draw'} fraction ={Math.round(((props.votes.draw/props.totalVotes)*100))}/>
           <Bar active={props.activeBar==='team2'} fraction ={Math.round(((props.votes.team2/props.totalVotes)*100))}/>
         </BarContainer>
         <DistributionContainer>
            <Distribution fraction={Math.round(((props.votes.team1/props.totalVotes)*100))}/>
            <Distribution fraction ={Math.round(((props.votes.draw/props.totalVotes)*100))}/>
            <Distribution fraction ={Math.round(((props.votes.team2/props.totalVotes)*100))}/>
         </DistributionContainer>
       </Result>


  )
}



export default result
