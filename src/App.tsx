import React from 'react';

interface Props {
  key: string;
}

export class App extends React.Component<Props> {
  state: Props = {
    key: '',
  };

  handleKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKey);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
