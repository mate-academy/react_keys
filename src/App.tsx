import React from 'react';

type Props = {
  key: string;
};

type StateProps = {
  key: string;
};

export class App extends React.Component<Props, StateProps> {
  state: StateProps = {
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
