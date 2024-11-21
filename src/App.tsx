import React from 'react';

type State = {
  item: string;
};

export class App extends React.Component {
  state: State = {
    item: '',
  };

  handlePressKeyboard = (event: KeyboardEvent): void => {
    this.setState({ item: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressKeyboard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressKeyboard);
  }

  render() {
    const { item } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {item
            ? `The last pressed key is [${item}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
