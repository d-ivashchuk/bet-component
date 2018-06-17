import React from 'react'
import PropTypes from 'prop-types'
import esp from '../../assets/esp.svg'
import uk from '../../assets/uk.svg'
import styled from 'styled-components'


const Title = styled.div`

font-weight:bold;
margin-top:0.5em;
margin-bottom:0.5em;
text-align:center;
text-transform:uppercase;
font-size:2em;
`
const Flag = styled.img`
margin: 0.8em;
padding:0.2em;
width:6em;
height:6em;
border-radius:50px;

`
const FlagContainer = styled.div`
display:flex;
justify-content:center;
margin-bottom:0.8em;
`

const game = (props) => {
  return (
    <React.Fragment>
      <Title>Who is going to win?</Title>
        <FlagContainer>
          <Flag src={uk}/>
          <Flag src={esp}/>
        </FlagContainer>
    </React.Fragment>
  )
}

export default game
