var React = require('react');
var ReactDom = require('react-dom');

// State
// Lifecycle events or methods
// UI


class App extends React.Component {
  render() {
    return (
    <h1>
      This is POLITICO REACT.. WELCOME
    </h1>
    )
  }
}

ReactDom.render(
  <App />, document.getElementById('app')
)