import React from 'react';

type Prop = {
  key: string
}

type State = {
  key: string,
}

export class App extends React.Component<Prop, State> {
  state: State = {
    key: '',
  }

  listenTheKeybordEv = (ev: KeyboardEvent) => {
    this.setState({ key: ev.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.listenTheKeybordEv);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.listenTheKeybordEv);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">{key === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${key}]`
        }</p>
      </div>
    )
  }
};
