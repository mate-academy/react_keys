import React from 'react';
import { State } from '../types/State';

export class AppMessage extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyBoard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyBoard);
  }

  onKeyBoard = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}
