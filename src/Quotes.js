import React, { Component } from 'react';

class Quotes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes : [
        'My life is my message. Mahatma Gandh',
        'I love those who can smile in trouble… Leonardo da Vinci',
        'Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying. If you love life, don’t waste time, for time is what life is made up of. Bruce Lee',
        'Life is what happens when you’re busy making other plans. John Lennon',
        'It is better to be hated for what you are than to be loved for what you are not. Andre Gide',
        'Dost thou love life? Then do not squander time, for that is the stuff life is made of. Benjamin Franklin',
        'Life is like playing a violin in public and learning the instrument as one goes on. Samuel Butler',
        'Believe that life is worth living and your belief will help create the fact. William James',
        'Do not take life too seriously. You will never get out of it alive. Elbert Hubbard',
        'Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager. Susan Sontag',
        'The heart, like the stomach, wants a varied diet. Gustave Flaubert',
        'I tell you, in this world being a little crazy helps to keep you sane. Zsa Zsa Gabor',
        'We know what we are, but know not what we may be. William Shakespeare',
        'Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things. Kenneth Branagh',
        'The trick in life is learning how to deal with it. Helen Mirren',
        'Be happy for this moment. This moment is your life. Omar Khayyam'
      ],
      displayedQuote : ''
    };
  }

  componentDidMount() {
    this.setState({
      displayedQuote : this.shuffle(this.state.quotes)[0]
    });
  }

  render() {
    return (
      <div style={{padding:'5px', margin:'0 auto', width:'70%'}}>
        <div className={`alert alert-${this.props.bgclass}`}>
          {this.state.displayedQuote}
        </div>
        <br/>
        <input type="button" onClick={ () => this.onRandomMessage() } value="Random" className="btn btn-dark"/>
      </div>
    );
  }

  onRandomMessage () {
    this.setState({
      displayedQuote : this.shuffle(this.state.quotes)[0]
    });
  }

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

export default Quotes;