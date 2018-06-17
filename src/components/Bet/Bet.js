import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`


  margin:10px;
  padding: 12px;

  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;
  border: 0 none;
  border-radius: 4px;

  font-size: 10px;
  font-weight: 500;
  line-height: 1.3;

  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;

  justify-content: center;
  align-items: center;
  flex: 0 0 100px;

  box-shadow: 2px 5px 10px var(--color-smoke);

  &:hover {
    transition: all 150ms linear;

    opacity: .85;
  }

  &:active {
    transition: all 150ms linear;
    opacity: .75;
  }

  color: #FFFFFF;
  background:#161616;

     &:focus {
      outline: 1px dotted white;
      outline-offset: -4px;
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
