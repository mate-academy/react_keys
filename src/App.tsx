import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  paragraphText = 'Nothing was pressed yet';

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
    this.paragraphText = `The last pressed key is [${event.key}]`;
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.paragraphText}</p>
      </div>
    );
  }
}
