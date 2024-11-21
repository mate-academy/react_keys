import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div>
        {
          pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'
        }
      </div>
    );
  }
}
