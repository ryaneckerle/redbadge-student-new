// Create a class version of the Functional Component

import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';

class FunctionalClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: props.initialValue,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ countValue: this.state.countValue - 1 });
    // setCountValue(countValue - 1);
  }

  render() {
    return (
      <Container>
        <p>The total clicks left are {this.state.countValue}</p>
        <Button onClick={this.handleClick}> Click Me From Function</Button>{' '}
      </Container>
    );
  }
}

export default FunctionalClickCounter;
