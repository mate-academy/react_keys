import React, { Component } from 'react';

type State = {
  pressedKey: string | null; // Змінено на string | null для відображення не натиснутої клавіші
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: null, // Встановлено в null за замовчуванням
  };

  // Метод для обробки подій keyup
  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key }); // Оновлюємо стан на натиснуту клавішу
  };

  // Додаємо глобальний обробник keyup при монтуванні компонента
  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // Видаляємо обробник keyup перед демонтуванням компонента
  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export default App;
