import React from 'react';



export class App extends React.Component {
  state = {
    pressedKey: '',
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({pressedKey:event.key})
      console.log(event.key);
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp)

  }
  componentWillUnmount(): void {
      document.removeEventListener('keyup', this.handleKeyUp)
  }
  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey ?
            `The last pressed key is [${this.state.pressedKey}]`
            : `Nothing was pressed yet`}</p>
      </div>
    )
  }
 }

// The last pressed key is {[Enter]}

// Nothing was pressed yet
