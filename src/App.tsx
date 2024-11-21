import React from 'react';

type Props = {};
type State = {
  keyName: string;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    keyName: '',
  };

  onKeyUp = (e: KeyboardEvent) => {
    this.setState({ keyName: e.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const { keyName } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyName
            ? `The last pressed key is [${keyName}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
