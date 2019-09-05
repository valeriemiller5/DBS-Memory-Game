import React, { Component } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import characters from './characters.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {characters};
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
