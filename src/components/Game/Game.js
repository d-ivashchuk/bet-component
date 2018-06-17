import React from 'react'
import PropTypes from 'prop-types'
import esp from '../../assets/esp.svg'
import uk from '../../assets/uk.svg'
import styled from 'styled-components'


const Title = styled.div`

font-weight:bold;
margin-top:1em;
text-align:center;
text-transform:uppercase;

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
      <Title>Who is going to win?</Title>
        <FlagContainer>
          <Flag><img src={uk} /></Flag>
          <Flag><img src={esp}  /></Flag>
        </FlagContainer>
    </React.Fragment>
  )
}

export default game
