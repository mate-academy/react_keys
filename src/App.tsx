import React from 'react';

type Props = { key: string };

type State = { key: string };

export class App extends React.Component<Props, State> {
  state: State = { key: '' };

  handleKeyPress = (evt: KeyboardEvent) => {
    this.setState({ key: evt.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key === ''
            ? `Nothing was pressed yet`
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
