import { PureComponent, ReactNode } from 'react';

export default class App extends PureComponent {
  state = { key: null };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): ReactNode {
    const { key } = this.state;
    const title = key
      ? `The last pressed key is [${key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{title}</p>
      </div>
    );
  }
}
