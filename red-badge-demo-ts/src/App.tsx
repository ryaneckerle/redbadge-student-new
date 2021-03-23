import React from 'react';
import PropsExample from './components/PropsExample'
import PropsMappingExample from './components/PropsMappingExample'

function App() {
  const visitedPlaces = ["Alaska", "Florida", "Texas", "Michigan", "Ohio", "Wisconsin"]
  return (
    <div className="App">
      <PropsExample name="Tom" business="MySpace"/>
      <PropsMappingExample visited={visitedPlaces}/>
    </div>
  );
}

export default App;
