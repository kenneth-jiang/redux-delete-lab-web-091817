import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().bands.map((band, index) => {
          return <Band key={index} store={this.props.store} band={band} />
        })}
      </ul>
    );
  }
};

export default Bands;
