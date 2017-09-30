import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

function HomeApp() {
  return (
    <div>
      Hello, we are in home.
    </div>
  )
}

HomeApp.propTypes = {
  
}

export default withRouter(HomeApp)