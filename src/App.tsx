import React from 'react';

interface State {
  keyPressed: string | null;
}

export class App extends React.Component <{}, State> {
  state = {
    keyPressed: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed
            ? `The last pressed key is [${keyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
