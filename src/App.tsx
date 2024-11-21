import React from 'react';

type State = {
  pressedkey: string,
};

export class App extends React.Component {
  state: State = {
    pressedkey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (e: KeyboardEvent) => {
    this.setState({ pressedkey: e.key });
  };

  render() {
    const { pressedkey } = this.state;

    return (
      <div className="App">
        {pressedkey.length === 0 ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is
            &#91;
            {pressedkey}
            &#93;
          </p>
        )}
      </div>
    );
  }
}
