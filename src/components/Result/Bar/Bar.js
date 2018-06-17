import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = styled.div`
margin-right:2px;
width:${props=>props.fraction}%;
height:20px;
background-color:${props => props.active ? '#10ADED': "#ccc"}
border-radius:6px;
`



const bar = (props) => {
  return (
      <Bar  active ={props.active}fraction={props.fraction}></Bar>
  )
}

export default bar
