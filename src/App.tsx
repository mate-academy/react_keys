import React from 'react';

interface State {
  key: string;
}

export class App extends React.Component {
  state: State = {
    key: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', e => {
      this.setState({ key: e.key });
    });
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
