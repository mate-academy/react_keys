import React from 'react';

type State = {
  currentKey: string;
};

export class PressedKey extends React.Component {
  state: State = {
    currentKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  render() {
    const { currentKey } = this.state;

    return (
      <p className="App__message">
        {currentKey
          ? `The last pressed key is [${currentKey}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}
