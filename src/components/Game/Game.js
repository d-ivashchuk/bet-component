import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Title = styled.div`
font-weight:bold;
margin-top:1em;
text-align:center;
`
const Flag = styled.div`
margin: 2em;
width:100px;
height:100px;
border-radius:50px;
background-color:#BADA55;
`
const FlagContainer = styled.div`
display:flex;
justify-content:center;
`

const game = (props) => {
  return (
    <React.Fragment>
      <Title>Who's going to win???</Title>
        <FlagContainer>
          <Flag></Flag>
          <Flag></Flag>
        </FlagContainer>
    </React.Fragment>
  )
}

export default game
