import React from 'react';
import { render } from 'react-dom';

type State = {
  key: string;
}

export class App extends React.Component {
  state: State = {
    key: ''
  }

  handleKeyPress = (event: KeyboardEvent) => {
     this.setState({key: event.key})
   }
 

  componentDidMount(): void {
    document.addEventListener('keyup',this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress );
  }

 

  render() {

    if (this.state.key) {
    return  (<div className="App">
    <p className="App__message">{`The last pressed key is [${this.state.key}]`}</p>
  </div>
    )
  } else {
    return  (<div className="App">
      <p className="App__message">Nothing was pressed yet</p>
    </div>)
  }
  }
};
