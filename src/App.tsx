import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );
type State = {
  putKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    putKey: '',
  };

  handlePutKeyboard = (event: KeyboardEvent) => {
    this.setState({ putKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePutKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePutKeyboard);
  }

  render() {
    const { putKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {putKey === ''
            ? `Nothing was pressed yet`
            : `The last pressed key is [${putKey}]`}
        </p>
      </div>
    );
  }
}
