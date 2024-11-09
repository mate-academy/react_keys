import React from 'react';

interface State {
  keyName: string;
  keyNameNot: boolean;
}

export class PressedKey extends React.Component<{}, State> {
  state: Readonly<State> = {
    keyName: '',
    keyNameNot: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  handleKeyboard = (event: KeyboardEvent) => {
    this.setState({ keyNameNot: true });
    this.setState({ keyName: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboard);
  }

  render() {
    const { keyName, keyNameNot } = this.state;

    return (
      <div>
        {keyNameNot ? (
          <p className="App__message">
            The last pressed key is {`[${keyName}]`}
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
