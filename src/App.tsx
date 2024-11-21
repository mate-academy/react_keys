import React from 'react';

type State = {
  key: string,
};

export class App extends React.Component {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    const element = document.querySelector('.App__message') as HTMLElement;

    element.innerHTML = 'Nothing was pressed yet';

    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{`The last pressed key is [${this.state.key}]`}</p>
      </div>
    );
  }
}
