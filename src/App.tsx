import React from 'react';

type State = {
  paragraph: string;
};

class Key extends React.Component<State> {
  state = {
    paragraph: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      paragraph: event.key,
    });
  };

  render(): React.ReactNode {
    const { paragraph } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {paragraph === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${paragraph}]`}
        </p>
      </div>
    );
  }
}

export const App: React.FC = () => <Key paragraph="" />;
