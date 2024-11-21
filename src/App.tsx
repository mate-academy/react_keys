import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
