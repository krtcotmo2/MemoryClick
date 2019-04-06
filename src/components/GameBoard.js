import React, { Component } from 'react'

export default class GameBoard extends Component{
     render() {
          if(!this.props.dirShown){
          return (
          <>
               <div className="container mt-3">
               <section className="row justify-content-between px-5 col-10 jusify-content-between mx-auto">
                    {this.props.children}
                    </section>
               </div>
          </>
          )
          }else{
               return (
                    <>
                    <div className="p-5 mt-5 bg-white col-10 col-lg-6 mx-auto text-left">
                         <h3>A festival is coming and you must prepare</h3>
                         <p>Loyalties are ever changing in the world of Westeros and even the smallest slight will be remembered for generations and can bring war and strife that could lay waste to the entire kingdom.</p>
                         <p>As Hand to the king it is important that during the upcoming feast you announce each house properly before the court. The order you choose is up to you. However if you announce a house a second time before announcing all of the houses, you will surely offend the unnamed houses.</p>
                         <p>To announce a house click on the banner for that house. Sadly like many party guests, they do not stay in one place for long and change position after each announcement so be aware of who you have called.</p>
                    </div>
                    </>
               )
          }
     }
}
