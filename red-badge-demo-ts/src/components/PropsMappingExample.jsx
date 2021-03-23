import React from 'react';

class PropsMappingExample extends React.Component {
  render() {
    const visitedPlaces = () =>
      this.props.visited.map((place) => <li>{place}</li>);
    return (
      <div>
        <h2>Places I have been</h2>
        <ul>{visitedPlaces()}</ul>
      </div>
    );
  }
}

export default PropsMappingExample;
