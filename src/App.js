import React, { Component } from 'react';
import './App.css';
import GameBoard from "./components/GameBoard";
import Card from "./components/Card";
import ScoreBoard from './components/ScoreBoard';
import Modal from  './components/Modal';
import Directions from './components/Directions';

class App extends Component {
     state = {
          bestScore:1,
          curScore:0,
          chosenCards : [],
          message:'',
          isOpen: false,
          dirShown:false,
          cards : [
               {
                    id:1,
                    name: "House Aaryn",
                    image: "/images/aaryn.png"
               },
               {
                    id:2,
                    name: "House Martel",
                    image: "/images/martel.png"
               },
               {
                    id:3,
                    name: "House Lanister",
                    image: "/images/lanister.png"
               },
               {
                    id:4,
                    name: "House Glover",
                    image: "/images/glover.png"
               },
               {
                    id:5,
                    name: "House Bolton",
                    image: "/images/bolton.png"
               },
               {
                    id:6,
                    name: "House Greyjoy",
                    image: "/images/greyjoy.png"
               },
               {
                    id:7,
                    name: "House Karstark",
                    image: "/images/karstark.png"
               },
               {
                    id:8,
                    name: "House Marmont",
                    image: "/images/marmont.png"
               },
               {
                    id:9,
                    name: "House Stark",
                    image: "/images/stark.png"
               },
               {
                    id:10,
                    name: "House Targaryen",
                    image: "/images/targaryen.png"
               },
               {
                    id:11,
                    name: "House Tully",
                    image: "/images/tully.png"
               },
               {
                    id:12,
                    name: "House Tyrell",
                    image: "/images/tyrell.png"
               }
          ].shuffle()
     };

     closeModal = () =>{
          this.doShuffle();
          this.setState({message: "", isOpen: false, curScore:0, chosenCards: []});
     }

     toggleDirections = () => {
          this.setState({dirShown : !this.state.dirShown});
     }

     clickCard = id => {   
          let theIndex = this.state.chosenCards.indexOf(id);
          if(theIndex>=0){
               let house = this.state.cards.find(x => x.id == id);
               this.setState({message: `You have already chosen ${house.name}. You have slighted houses, war is imminent`, isOpen: !this.state.isOpen});
          }else{
               let bestScore = this.state.bestScore;
               let curScore = this.state.curScore;
               curScore++;
               var joined = this.state.chosenCards.concat(id);
               if(bestScore < joined.length)
                    bestScore = joined.length
               this.setState({chosenCards: joined, bestScore: bestScore, curScore: curScore}, function(){
                    if(curScore == this.state.cards.length){
                         this.setState({message: "You have chosen all 12 houses without offending any of them. The festival will conitue peacfully, at least for the moment", isOpen: !this.state.isOpen});
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
               <div className="cardHolder col-3 p-2">
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
                         <div>Houses of Westeros</div>
                         <div>Current Score: {this.state.curScore}</div>
                         <div>Best Score: {this.state.bestScore}</div>
                    </ScoreBoard>
                    <Directions 
                    toggleDirections={this.toggleDirections}
                    dirShown={this.state.dirShown}
                    />
                    <GameBoard dirShown={this.state.dirShown}>
                         {stuff}
                    </GameBoard>
                    <Modal message={this.state.message}
                    isOpen={this.state.isOpen}
                    closeClick={this.closeModal}/>
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
