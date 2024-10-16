import React from 'react';

type Props = {
  keyType: string;
};

export class App extends React.Component<Props> {
  state : Props= {
    keyType:'',
  }
  handleKey = (event: KeyboardEvent) => {
    this.setState({keyType: event.key})
  }
  componentDidMount() {
    window.addEventListener('keyup', this.handleKey);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKey);
  }
  render() {
    const { keyType } = this.state;
    return (
      <div className="App">
      {keyType ? (
          <p className="App__message">The last pressed key is [{keyType}]</p>
      ) : (
          <p className="App__message">Nothing was pressed yet</p>
      )}
      </div>
    );
  } 
};
