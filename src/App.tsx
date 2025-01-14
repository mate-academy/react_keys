import React from 'react';

type State = {
  prevKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    prevKey: '',
  };

  handleGlobalClick = (event: KeyboardEvent) => {
    this.setState({ prevKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleGlobalClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleGlobalClick);
  }

  render() {
    const { prevKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!prevKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.prevKey}]`}
        </p>
      </div>
    );
  }
}

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );
