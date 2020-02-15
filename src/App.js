import React, { Component } from "react";
import FriendCard from "./components/Character";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friendsList: friends,
    clicked: [],
    score: 0
  };

  clickCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friendsList.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    
    //this.state.friendsList.forEach(friend => {});
    
    
    const newArr = this.state.friendsList.slice();
    const shuffleArr = [];
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }

    this.setState({ friendsList: shuffleArr });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.friendsList.map(friend => (
          <FriendCard
            clickCharacter={this.clickCharacter}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
