import React, { Component } from 'react';
import Runner from '../core/Runner';
import '../spec/Standard';
import Popup from './components/Popup';
import A11YInlineMessages from './components/A11YInlineMessages/index';

class App extends Component {

  constructor(props) {
    super(props);
    const results = new Runner().run();
    let messages = results.filter((msg) => msg.type === 'ERROR' || msg.type === 'WARNING');
    messages.sort((a, b) => (a === 'ERROR' ? -1 : 1));
    this.state = { messages: messages, hash: window.location.hash };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ hash: window.location.hash });
      window.scrollTo(window.scrollX, window.scrollY - 100);

    });
  }

  render() {
    return (
      <div>
        <Popup hash={this.state.hash} messages={this.state.messages} />
        <A11YInlineMessages hash={this.state.hash} messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
