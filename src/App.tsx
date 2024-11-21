import React from 'react';

interface Props {
  initialPressedKey?: string;
  title?: string;
}

interface State {
  pressedKey: string;
}

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? `Nothing was pressed yet`
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
