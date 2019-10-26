import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImagesContainer from "./components/ImagesContainer";



//images clicked puts the images that have been clicked in an array in order to check for ones that have been clicked twice
class App extends Component {
  state = {
    score : 0,
    topScore: 0,
    imagesClicked: [],
    message: "Start Clicking!!"
  }
  
  //for when image is clicked
  handleImageClick = event => {
    
    //storing image id in a variable
    const imageID = event.target.id;

    //checks if image is in the images clicked array if it is it gives a message and sets score to zero if not it is pushed to the images clicked array 
    if(this.state.imagesClicked.includes(imageID)) {
      this.setState({
        score: 0, 
        imagesClicked: [],
        message: "YOU DON'T GOT THE ANSWERS SWAY!",
      });

    } 
    //if image is not clicked
    else {
  
      this.state.imagesClicked.push(imageID);
      if(this.state.topScore <= this.state.score) {
        this.setState({
          topScore: this.state.score + 1,
          message: "New Album",
          score: this.state.score + 1
        })
      } else {
        //keeps highscore if it has not been suroassed
        this.setState({
          message: "New Album",
          score: this.state.score + 1
        })
      }
    }
  }
  
  render() {
    return (
      <div>
         <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <ImagesContainer handleImageClick={this.handleImageClick}/>
      
      </div>
    );
  }
 
}

export default App;
