import React from 'react';

export class App extends React.Component {
  state = {
    presedKey: '',
  };

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ presedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  render() {
    const { presedKey } = this.state;

    return (
      <div className="App">
        {presedKey ? (
          <p className="App__message">The last pressed key is [{presedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
