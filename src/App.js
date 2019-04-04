import React, { Component } from 'react';
import './App.css';
import GameBoard from "./components/GameBoard";
import Card from "./components/Card";
import ScoreBoard from './components/ScoreBoard';

class App extends Component {
     state = {
          bestScore:1,
          curScore:0,
          chosenCards : [],
          cards : [
               {
                    id:1,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:2,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:3,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:4,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:5,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:6,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:7,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:8,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:9,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:10,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:11,
                    name: "Bo Jackson",
                    image: "img1.png"
               },
               {
                    id:12,
                    name: "Bo Jackson",
                    image: "img1.png"
               }
          ].shuffle()
     };
     clickCard = id => {   
          let theIndex = this.state.chosenCards.indexOf(id);
          if(theIndex>=0){
               this.setState({chosenCards: [], curScore: 0}, function(){
                    this.doShuffle();
               });
          }else{
               let bestScore = this.state.bestScore;
               let curScore = this.state.curScore;
               curScore++;
               var joined = this.state.chosenCards.concat(id);
               if(bestScore < joined.length)
                    bestScore = joined.length
               this.setState({chosenCards: joined, bestScore: bestScore, curScore: curScore}, function(){
                    if(curScore == this.state.cards.length){
                         console.log("win")
                    }else{
                         this.doShuffle();
                    }
               });
          }          
     };
     doShuffle =() =>{
          let newArr = this.state.cards.shuffle()
          this.setState({cards: newArr});
     };
     render() {
          let stuff=this.state.cards.map(card => (
               <div className="cardHolder col-4 p-2">
               <Card 
               cardClick={this.clickCard}
               id={card.id}
               key={card.id}
               name={card.name}
               image={card.image}
               />
               </div>
          ))
          return (
               <div className="App">
                    <ScoreBoard>
                         <div>Title</div>
                         <div>Current Score: {this.state.curScore}</div>
                         <div>Best Score: {this.state.bestScore}</div>
                    </ScoreBoard>
                    <GameBoard>
                         {stuff}
                    </GameBoard>
               </div>
          );
     };
}

Array.prototype.shuffle = function() {
     let i = this.length, j, temp;
     if ( i == 0 ) return this;
     while ( --i ) {
          j = Math.floor( Math.random() * ( i + 1 ) );
          temp = this[i];
          this[i] = this[j];
          this[j] = temp;
     }
     return this;
}

export default App;
