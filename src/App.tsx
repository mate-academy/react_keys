//import { any } from 'cypress/types/bluebird';
import React from 'react';
type Props = {
  currentKey: string;
  lastKey: string;
};
type State = {
  currentKey: string | null;
  lastKey: string | null;
};
export class App extends React.Component<Props, State> {
  state: State = {
    currentKey: null,
    lastKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key, lastKey: this.state.currentKey });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { currentKey, lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey === null
            ? 'Nothing was pressed yet'
            : lastKey === currentKey && currentKey !== null
              ? `[${currentKey}] was pressed again`
              : `The last pressed key is [${currentKey}]`}
        </p>
      </div>
    );
  }
}
