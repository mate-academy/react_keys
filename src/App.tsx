import { Component } from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">Nothing was pressed yet</p>
//   </div>
// );

type State = {
  message: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyThatPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyThatPressed);
  }

  keyThatPressed = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}
