import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

export class App extends React.Component {
  state = {
    keyPressed: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <h1 className="App__message">
        {keyPressed
          ? `The last pressed key is [${keyPressed}]`
          : 'Nothing was pressed yet'}
      </h1>
    );
  }
}
