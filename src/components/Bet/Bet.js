import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
color: #fff !important;
text-transform: uppercase;
background: #ed3330;
padding: 15px;
border-radius: 5px;
display: inline-block;
border: none;
margin-right:0.7em;
cursor:pointer;

&:hover{
background: #434343;
letter-spacing: 1px;
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.1s ease-in 0s;
}
`

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
`

const bet = (props) => {
  return (

    <React.Fragment>
      <ButtonContainer>
          <StyledButton onClick={()=>props.bet('team1')}>{props.teams[0]}</StyledButton>
          <StyledButton onClick={()=>props.bet('draw')}>Draw</StyledButton>
          <StyledButton onClick={()=>props.bet('team2')}>{props.teams[1]}</StyledButton>
        </ButtonContainer>
    </React.Fragment>
  )
}

export default bet
