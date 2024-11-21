import React from 'react';

export class App extends React.Component{
  state = {
    lastKey: ''
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  render() {

    const {lastKey} = this.state

    return (
      <div className="App">
        {lastKey ?
          (<p className="App__message">The last pressed key is [{lastKey}]</p>)
          :
          (<p className="App__message">Nothing was pressed yet</p>)}
      </div>
    )
  }
}
