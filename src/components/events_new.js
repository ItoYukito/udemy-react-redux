import React, { Component } from 'react';
import { connect } from 'react-redux'

// import { postEvent } from '../actions'
import { Link } from 'react-router-dom'

class EventsNew extends Component {
  render() {
    return(
      <React.Fragment>
        <div>aaaa</div>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   EventsNew: () => dispatch(EventsNew())
// })

export default connect(null, null)(EventsNew)