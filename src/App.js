import React, { Component } from "react";
import FriendCard from "./components/Character";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

var score = 0;
class App extends Component {
  
  state = {
    friendsList: friends,
    clicked: [],
    score: 0
  };

  clickCharacter = id => {
    if(this.state.clicked.includes(id))
    {
      alert("You LOSE!");
      score = 0;
      this.setState({friendsList: friends, clicked: [], score: 0});
    }
    else{
      score++;
      let newClicked = this.state.clicked.slice();
      newClicked.push(id);
      const newArr = this.state.friendsList.slice();
      const shuffleArr = [];
      while (newArr.length > 0) {
        shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
      }
      if(score === 12){
        score = 0;
        alert("You WIN!");
        console.log("SCORE: " + this.state.score);
        this.setState({friendsList: friends, clicked: [], score: score}); 
      }
      else{
      this.setState({ friendsList: shuffleArr, clicked: newClicked, score: this.state.score+1});
      }
      
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Title>Score: {this.state.score}</Title>
        {this.state.friendsList.map(friend => (
          <FriendCard
            clickCharacter={this.clickCharacter}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
