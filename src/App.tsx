// import { event } from 'cypress/types/jquery';
import React from 'react';

type State = {
  keyValue: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    keyValue: '',
  };

  handeleKeyPress = (event: KeyboardEvent) => {
    this.setState({ keyValue: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handeleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handeleKeyPress);
  }

  render() {
    const { keyValue } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!keyValue
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${keyValue}]`}
        </p>
      </div>
    );
  }
}
