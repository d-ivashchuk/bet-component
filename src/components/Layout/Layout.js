import React from 'react';
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const StyledLayout = styled.div`
  background-color: white;
  padding:15px;
  max-width:470px;
  margin:5rem auto;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
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
