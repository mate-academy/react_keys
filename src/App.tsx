import React from 'react';

type Props = {};

interface State {
  inputKey: string
}

export class App extends React.Component<Props, State> {
  state = {
    inputKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    this.setState({ inputKey: event.key });
  };

  render(): React.ReactNode {
    const { inputKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {inputKey
            ? (`The last pressed key is [${inputKey}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
