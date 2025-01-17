import React from 'react';

type Props = {};

type State = {
  onPressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    onPressedKey: '',
  };

  handleKey = (event: KeyboardEvent) => {
    this.setState({ onPressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKey);
  }

  render() {
    const { onPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">

          {onPressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${onPressedKey}]`}
        </p>
      </div>
    );
  }
}
