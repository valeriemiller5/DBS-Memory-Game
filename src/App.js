import React, { Component } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import characters from './characters.json';

class App extends Component {
  state = {
    characters,
    isFlipped: false,
    // clicked: characters,
    chosenCards: [],
    currentScore: 0,
    // totalScore: 0, 
  };
  // create cards with images on the front and the same pattern on all on the back
  // user can "flip" two cards
  // if they match, they stay face up and score is increased +1
  // if they do not match, they "flip" back over
  // once all card matches have been found, +10 to final score
  // game resets
  // cards are shuffled and all are face down to start a new round
  // users can log in and continue adding to their score each time they play the game
  // Generate two of each image to match together

  componentDidMount() {
    this.shuffleCharacter(characters);
    // console.log(characters);
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
    let firstChoice = this.state.characters.filter(character => character.name === name);
    console.log(this.state.characters)
    console.log(firstChoice);
    // let secondChoice = this.state.characters.map(character => character.name);
    // let newScore = this.state.currentScore + 1;
    // if(firstChoice === secondChoice) {
    //   this.setState({
    //     chosenCards: firstChoice, secondChoice,
    //     isFlipped: true,
    //     currentScore: newScore
    //   })
    // } else {

    // }

  }


  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper>
          {this.state.characters.filter(character => {
            if(character.id === 49) {
              return false;
            }
            return true;
          }).map(character => ( 
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
