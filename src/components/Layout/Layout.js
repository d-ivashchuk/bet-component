import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLayout = styled.div`
position:fixed;
   top: 50%;
   left: 50%;
   width:30em;
   height:18em;
   margin-top: -9em;
   margin-left: -15em; 
   border: 1px solid #ccc;
   background-color: #f3f3f3;
`

const layout = (props) => {
  return (
    <React.Fragment>
      <StyledLayout>
        {props.children}
      </StyledLayout>
    </React.Fragment>
  )
}

export default layout
