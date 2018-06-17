import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = styled.div`
margin-right:5px;
width:${props=>props.fraction}%;
height:20px;
background-color:${props => props.active ? '#10ADED': "#ccc"}
`



const bar = (props) => {
  return (
      <Bar  fraction={props.fraction}></Bar>
  )
}

export default bar
