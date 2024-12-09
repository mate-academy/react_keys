import React from 'react';

type Props = {
  key: string;
};

type State = {
  key: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    key: '',
  };

  handleKeyboardPressed = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardPressed);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
