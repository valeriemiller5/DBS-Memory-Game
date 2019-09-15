import React, { Component } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import characters from './characters.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters,
      clicked: characters,
      cardPair: [],
      matches: 0
    };
    this.shuffleCharacter(characters);
  }

  // Handles card 'shuffle' each time an image card is clicked
  // Fisher-Yates Shuffling Algorithm
  shuffleCharacter = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  handleClick = name => {
    let cardChoice = name.target.alt
    console.log(`Character Name: ${cardChoice}`);
    let checkMatch = this.state.cardPair.concat(cardChoice);
    this.setState({ cardPair: checkMatch });
    console.log(checkMatch);
    let checkArrayLength = this.state.cardPair.length;
    console.log(`Current Array Length: ${checkArrayLength}`);
    if (checkArrayLength === 1) {
      if (checkMatch[0] === checkMatch[1]) {
        console.log("Yay, you have a match!")
        this.setState({
          cardPair: [],
          matches: this.state.matches + 1,
        });
        console.log(`Matched pairs; ${this.state.matches}`);
        document.getElementById("message").style.color = "orange";
        document.getElementById("message").innerHTML = "Yay, you have a match!";
      } else {
        console.log("Awww, try again...")
        this.setState({
          cardPair: []
        });
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Awww, try again...";
      };
    } else if (this.state.matches === 23) {
      console.log("GAME OVER YOU WIN!!!!")
      document.getElementById("message").style.color = "greed";
      document.getElementById("message").innerHTML = "GAME OVER YOU WIN!!!!";
      setTimeout(this.reset(), 2000);
    } 
  }

  reset = () => {
    this.setState({
      characters,
      clicked: characters,
      cardPair: [],
      matches: 0
    });
    this.shuffleCharacter(characters);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper>
          {this.state.characters.map(character => (
            <Card
              key={character.id}
              name={character.name}
              click={this.state.clicked}
              image={character.image}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
