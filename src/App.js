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

  handleCardFlip = () => {
    let matches = this.state.cardPair;
    for(let i = 0; i < matches.length; i++) {
      console.log(matches[i]);
      document.getElementsByClassName("card")[i].click();
    }
  }

  handleClick = name => {
    let cardChoice = name.target.alt
    console.log(`Character Name: ${cardChoice}`);
    let checkMatch = this.state.cardPair.concat(cardChoice);
    this.setState({ cardPair: this.state.cardPair.concat(cardChoice) });
    console.log(`concat cardChoice: ${checkMatch}`);
    console.log(`cardPair after setState: ${this.state.cardPair}`)
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
        // setTimeout(this.handleCardFlip(), 2000);
        this.setState({
          cardPair: []
        });
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Awww, try again...";
      };
    } else if (this.state.matches === 23) {
      console.log("GAME OVER YOU WIN!!!!")
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerHTML = "GAME OVER YOU WIN!!!!";
      setTimeout(function(){window.location.reload()}, 5000);
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
